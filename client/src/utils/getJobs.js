import axios from "axios";

const getJobs = async location => {
    try {
        const res = await axios.get(
            `http://localhost:4000/jobs?location=${location}`
        );
        const jobsData = res.data;
        return jobsData;
    } catch (err) {
        return err.message;
    }
};

export default getJobs;
