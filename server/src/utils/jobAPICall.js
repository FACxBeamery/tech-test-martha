const axios = require("axios");

const paramsString = (location, description, full_time) => {
    let queryString = "";
    if (full_time === "All") {
        full_time = null;
    } else if (full_time === "Full Time") {
        full_time = true;
    } else if (full_time === "Full Time") {
        full_time = false;
    }
    const fullTimeExists = full_time === true || full_time === false;
    if (location) {
        queryString += `?location=${location}`;
        if (description) {
            queryString += `&description=${description}`;
        }
        if (fullTimeExists) {
            queryString += `&full_time=${full_time}`;
        }
    } else if (description) {
        queryString += `?description=${description}`;
        if (fullTimeExists) {
            queryString += `&full_time=${full_time}`;
        }
    } else if (fullTimeExists) {
        queryString += `?full_time=${full_time}`;
    }
    return queryString;
};

const replaceSpacesLowercase = str => {
    let newString = str.trim();
    newString = str.replace(/ /g, "+").toLowerCase();
    return newString;
};
const jobAPICall = async ({ location, description, full_time }) => {
    const queryString = paramsString(location, description, full_time);

    const urlQueryString = replaceSpacesLowercase(queryString);

    const url = `https://jobs.github.com/positions.json${urlQueryString}`;

    let res = await axios.get(url);

    let jobData = res.data;

    return jobData;
};

module.exports = jobAPICall;
