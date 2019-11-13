const jobAPICall = require("../utils/jobAPICall");

const getJobs = async (req, res) => {
  try {
    const location = req.query.location;
    const description = req.query.description;
    const fullTime = req.query.full_time;
    const jobData = await jobAPICall({ location, description, fullTime });
    res.status(200).send(jobData);
  } catch (err) {
    res.status(404).send(err);
  }
};

module.exports = getJobs;
