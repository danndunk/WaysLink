const { tb_link } = require("../../models");

const crypto = require("crypto");

exports.addLink = async (req, res) => {
  try {
    let uniqueLink = crypto.randomBytes(4).toString("hex");

    const { title, description, links, templateID } = req.body;
    const { id } = req.user;

    const link = await tb_link.create({
      userId: id,
      profile: req.file.filename,
      title: title,
      description: description,
      templateID: templateID,
      uniqueLink: uniqueLink,
      links: links,
      viewCount: 0,
    });

    let previewLink = await tb_link.findOne({
      where: {
        id: link.id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    previewLink = JSON.parse(JSON.stringify(previewLink));

    const getLink = JSON.parse(previewLink.links);

    previewLink = {
      ...previewLink,
      links: getLink,
    };

    res.status(200).send({
      status: "success",
      data: {
        user: previewLink,
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

exports.getLink = async (req, res) => {
  try {
    const { id } = req.params;

    let previewLink = await tb_link.findOne({
      where: {
        uniqueLink: id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    previewLink = JSON.parse(JSON.stringify(previewLink));

    const countUpdate = {
      viewCount: previewLink.viewCount + 1,
    };

    await tb_link.update(countUpdate, {
      where: {
        uniqueLink: id,
      },
    });

    const getLink = JSON.parse(JSON.parse(previewLink.links));

    previewLink = {
      ...previewLink,
      links: getLink,
      profile: process.env.PATH_FILE + previewLink.profile,
    };

    res.status(200).send({
      status: "success",
      data: previewLink,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.updateLink = async (req, res) => {
  try {
    const { id } = req.params;
    const newData = req.body;

    await tb_link.update(newData, {
      where: {
        uniqueLink: id,
      },
    });

    res.send({
      status: "success",
      message: "update link finished",
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

exports.deleteLink = async (req, res) => {
  try {
    const { id } = req.params;

    await tb_link.destroy({
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
