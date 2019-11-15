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
    const [keyword, setKeyword] = useState(null);
    const [fullTime, setFullTime] = useState(null);
    const [jobsData, setJobsData] = useState(null);

    useEffect(() => {
        const getAPIJobs = async (location, setJobsData) => {
            if (location) {
                const apiData = await getJobs(location, keyword, fullTime);
                setJobsData(apiData);
            }
        };
        getAPIJobs(location, setJobsData);
    }, [location, keyword, fullTime, setJobsData]);

    return (
        <>
            {jobsData ? (
                Array.isArray(jobsData) ? (
                    <JobsList
                        location={location}
                        keyword={keyword}
                        fullTime={fullTime}
                        jobsData={jobsData}
                        setJobsData={setJobsData}
                    />
                ) : (
                    <>
                        <ErrorMessage message={jobsData} />
                        <LocationForm
                            setLocation={setLocation}
                            setKeyword={setKeyword}
                            setFullTime={setFullTime}
                        />
                    </>
                )
            ) : (
                <LocationForm
                    setLocation={setLocation}
                    setKeyword={setKeyword}
                    setFullTime={setFullTime}
                />
            )}
        </>
    );
};

export default Main;
