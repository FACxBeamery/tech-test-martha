import React, { useState, useEffect } from "react";
import LocationForm from "./LocationForm/LocationForm";
import styles from "./Main.module.css";
import JobsList from "./JobsList/JobsList";
import getJobs from "../../utils/getJobs";

const ErrorMessage = ({ message }) => {
    return (
        <p className={styles["error-message"]}>
            {`We're experiencing some problems on our end. Please check your
            connnection and try again`}{" "}
            <br />
            {`Error message: ${message}`}
        </p>
    );
};
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
                Array.isArray(jobsData) ? (
                    <JobsList
                        location={location}
                        jobsData={jobsData}
                        setJobsData={setJobsData}
                    />
                ) : (
                    <>
                        <ErrorMessage message={jobsData} />
                        <LocationForm setLocation={setLocation} />
                    </>
                )
            ) : (
                <LocationForm setLocation={setLocation} />
            )}
        </>
    );
};

export default Main;
