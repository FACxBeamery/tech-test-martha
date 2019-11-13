const jobAPICall = require("../utils/jobAPICall");

const getJobs = async (req, res) => {
  try {
    const jobData = await jobAPICall(req.query);
    res.status(200).send(jobData);
  } catch (err) {
    res.status(404).send(err);
  }
};

module.exports = getJobs;
