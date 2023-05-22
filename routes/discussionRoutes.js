const express = require("express");

const { getAllDiscussion, createDiscussion } = require("../controllers/discussionControllers");

const router = express.Router();

router.get("/", getAllDiscussion);
router.post("/create", createDiscussion);

module.exports = router;