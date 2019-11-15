import axios from "axios";
import paramString from "../utils/paramsString";

const getJobs = async (location, keyword, fullTime) => {
    try {
        const queryString = paramString(location, keyword, fullTime);
        const res = await axios.get(`http://localhost:4000/jobs${queryString}`);
        const jobsData = res.data;
        return jobsData;
    } catch (err) {
        return err.message;
    }
};

export default getJobs;
