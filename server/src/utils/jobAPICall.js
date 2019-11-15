const axios = require("axios");

const paramsString = (location, description, full_time) => {
    let queryString = "";
    if (location) {
        queryString += `?location=${location}`;
        if (description) {
            queryString += `&description=${description}`;
        }
        if (full_time) {
            queryString += `&full_time=true`;
        }
    } else if (description) {
        queryString += `?description=${description}`;
        if (full_time) {
            queryString += `&full_time=true`;
        }
    } else if (full_time) {
        queryString += `?full_time=true`;
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
