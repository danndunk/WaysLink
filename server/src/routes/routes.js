const express = require("express");

const router = express.Router();

const {
  register,
  login,
  getUser,
  deleteUser,
  updateUser,
  getUserLinks,
} = require("../controllers/user");

const { checkAuth } = require("../controllers/checkAuth");

const {
  addLink,
  getLink,
  updateLink,
  deleteLink,
} = require("../controllers/links");

const { auth } = require("../middlewares/auth");

const { uploadImage } = require("../middlewares/uploadFile");

router.post("/register", register);
router.post("/login", login);
router.get("/user", auth, getUser);
router.patch("/user/:id", auth, updateUser);
router.delete("/user/:id", auth, deleteUser);

router.get("/user-links", auth, getUserLinks);

router.get("/check-auth", auth, checkAuth);

router.post("/link", auth, uploadImage("profile"), addLink);
router.get("/link/:id", auth, getLink);
router.patch("/link/:id", uploadImage("profile"), auth, updateLink);
router.delete("/link/:id", auth, deleteLink);

module.exports = router;
