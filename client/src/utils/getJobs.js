import axios from "axios";

const getJobs = async location => {
    const res = await axios.get(
        `http://localhost:4000/jobs?location=${location}`
    );
    const jobsData = res.data;
    return jobsData;
};

export default getJobs;
