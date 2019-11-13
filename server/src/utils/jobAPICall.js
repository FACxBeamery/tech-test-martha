const axios = require("axios");

const jobAPICall = async ({ location, description, full_time }) => {
  console.log("IVE BEEN CALLED");
  const locationParam = location ? `location=${location}` : "";
  const descriptionParam = description
    ? `${locationParam ? "&" : ""}description=${description}`
    : "";
  const fullTimeParam = full_time
    ? `${locationParam ? "&" : ""}full_time=true`
    : "";

  const url = `https://jobs.github.com/positions.json?${locationParam}${descriptionParam}${fullTimeParam}`;

  console.log(url, "URL");
  let res = await axios.get(url);

  let jobData = res.data;

  return jobData;
};

module.exports = jobAPICall;
