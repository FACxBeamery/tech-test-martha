import React, { useState, useEffect } from "react";
import LocationForm from "./LocationForm/LocationForm";
import JobsList from "./JobsList/JobsList";
import getJobs from "../../utils/getJobs";

const Main = () => {
    const [location, setLocation] = useState(null);
    const [jobsData, setJobsData] = useState(null);

    useEffect(() => {
        const getAPIJobs = async (location, setJobsData) => {
            if (location) {
                const apiData = await getJobs(location);
                setJobsData(apiData);
            }
        };
        getAPIJobs(location, setJobsData);
    }, [location, setJobsData]);

    return (
        <>
            {jobsData ? (
                <JobsList
                    location={location}
                    jobsData={jobsData}
                    setJobsData={setJobsData}
                />
            ) : (
                // <JobsList />
                <LocationForm setLocation={setLocation} />
            )}
        </>
    );
};

export default Main;
