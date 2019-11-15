const paramsString = (location, description, full_time) => {
    let queryString = "";
    if (full_time === "All") {
        full_time = null;
    }
    if (location) {
        queryString += `?location=${location}`;
        if (description) {
            queryString += `&description=${description}`;
        }
        if (full_time) {
            console.log("FULL TIME", full_time);
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

export default paramsString;
