const express = require("express");

const { getalldiscussion, creatediscussion } = require("../controllers/discussionControllers");

const router = express.Router();

router.get("/", getalldiscussion);
router.post("/create", creatediscussion);

module.exports = router;