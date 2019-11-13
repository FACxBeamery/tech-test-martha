const express = require("express");

const getJobs = require("./handlers/getJobs");
const router = express();

router.use(express.static("public"));

router.get("/jobs", getJobs);

module.exports = router;
