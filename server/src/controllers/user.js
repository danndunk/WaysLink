const { tb_user, tb_link } = require("../../models");

const Joi = require("joi");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const schema = Joi.object({
      email: Joi.string().email().min(6).required(),
      password: Joi.string().min(6).required(),

      fullname: Joi.string().min(5).required(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(200).send({
        status: "error",
        message: error.details[0].message,
      });
    }

    const userExist = await tb_user.findOne({
      where: {
        email: req.body.email,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    if (userExist) {
      return res.status(200).send({
        status: "failed",
        message: "email has already taken",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = await tb_user.create({
      email: req.body.email,
      password: hashedPassword,
      fullname: req.body.fullname,
      role: "user",
    });

    const dataToken = {
      id: newUser.id,
      email: newUser.email,
    };

    const SECRET_KEY = process.env.TOKEN_KEY;

    const token = jwt.sign(dataToken, SECRET_KEY);

    res.status(200).send({
      status: "success",
      data: {
        user: {
          email: newUser.email,
          token: token,
        },
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const schema = Joi.object({
      email: Joi.string().email().min(6).required(),
      password: Joi.string().min(6).required(),
    });
    const { error } = schema.validate(req.body);

    if (error)
      return res.status(200).send({
        message: error.details[0].message,
      });

    const userExist = await tb_user.findOne({
      where: {
        email: req.body.email,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    const isValid = await bcrypt.compare(req.body.password, userExist.password);

    if (!isValid) {
      return res.status(200).send({
        status: "failed",
        message: "email or password doesnt match",
      });
    }

    const dataToken = {
      id: userExist.id,
      email: userExist.email,
    };

    const SECRET_KEY = process.env.TOKEN_KEY;

    const token = jwt.sign(dataToken, SECRET_KEY);

    res.status(200).send({
      status: "success",
      data: {
        email: userExist.email,
        fullname: userExist.fullname,
        token: token,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(200).send({
      status: "failed",
      message: "account is not registered",
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    await tb_user.destroy({
      where: { id },
    });

    res.status(200).send({
      status: "success",
      data: {
        id,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const { id } = req.user;

    const user = await tb_user.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "password"],
      },
    });

    res.status(200).send({
      status: "success",
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const newData = req.body;

    const schema = Joi.object({
      email: Joi.string().email().min(6).required(),
      fullname: Joi.string().min(6).required(),
    });
    const { error } = schema.validate(newData);

    if (error)
      return res.status(200).send({
        message: error.details[0].message,
      });

    await tb_user.update(newData, {
      where: {
        id: id,
      },
    });

    res.send({
      status: "success",
      message: `update user ${id} finished`,
      data: newData,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.getUserLinks = async (req, res) => {
  const { id } = req.user;
  try {
    let userLinks = await tb_user.findAll({
      where: {
        id,
      },
      include: {
        model: tb_link,
        as: "tb_links",
        attributes: {
          exclude: ["createdAt", "updatedAt", "userId"],
        },
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "password"],
      },
    });

    userLinks = JSON.parse(JSON.stringify(userLinks));

    let getLinks = userLinks[0].tb_links;

    getLinks = getLinks.map((item) => {
      return {
        ...item,
        links: JSON.parse(item.links),
        profile: process.env.PATH_FILE + item.profile,
      };
    });

    userLinks = {
      ...userLinks[0],
      tb_links: getLinks,
    };

    res.status(200).send({
      status: "success",
      data: userLinks,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Server Error",
    });
  }
};
