const axios = require("axios");
const paramsString = require("./paramsString");
const replaceSpacesLowercase = require("./replaceSpacesLowercase");

const jobAPICall = async ({ location, description, full_time }) => {
    const queryString = paramsString(location, description, full_time);

    const urlQueryString = replaceSpacesLowercase(queryString);

    const url = `https://jobs.github.com/positions.json${urlQueryString}`;

    let res = await axios.get(url);

    let jobData = res.data;

    return jobData;
};

module.exports = jobAPICall;
