import React, { useState } from "react";
import styles from "./JobsList.module.css";
import capitalizeFirstLetter from "../../../utils/capitalizeFirstLetter";

const JobsListHeader = ({ location }) => {
    return (
        <h2 className="jobs-list-header">{`Jobs in ${capitalizeFirstLetter(
            location
        )}`}</h2>
    );
};
const BackButton = ({ setJobsData }) => {
    return (
        <button
            className={styles["back-button"]}
            onClick={e => setJobsData(null)}
        >
            Back to search
        </button>
    );
};

const NoJobsMessage = () => {
    return (
        <p className={styles["no-jobs-message"]}>
            We can't find any jobs in this city! Please try another search.
        </p>
    );
};
const CompanyName = ({ jobInfo }) => {
    return <h4 className={styles["company-name"]}>{jobInfo.company}</h4>;
};

const CompanyLogo = ({ jobInfo }) => {
    return (
        <img
            className={styles["company-logo"]}
            src={jobInfo.company_logo}
            alt="company-logo"
        ></img>
    );
};

const JobLocation = ({ jobInfo }) => {
    return <p className={styles["job-location"]}>{jobInfo.location}</p>;
};

const JobTitle = ({ jobInfo }) => {
    return <h3 className={styles["job-title"]}>{jobInfo.title}</h3>;
};

const JobDescription = ({ jobInfo }) => {
    return (
        <p
            className={styles["job-description"]}
            data-testid="job-description"
            dangerouslySetInnerHTML={{ __html: jobInfo.description }}
        ></p>
    );
};

const CollapseButton = ({ setExpandView }) => {
    return (
        <button
            className={styles["expand-collapse-button"]}
            onClick={e => setExpandView(false)}
        >
            Collapse information
        </button>
    );
};

const ExpandButton = ({ setExpandView }) => {
    return (
        <button
            className={styles["expand-collapse-button"]}
            onClick={e => setExpandView(true)}
        >
            Expand information
        </button>
    );
};

const JobLink = ({ jobInfo }) => {
    return <a href={jobInfo.url}>Apply</a>;
};
const JobsListItem = ({ jobInfo }) => {
    const [expandView, setExpandView] = useState(false);
    return (
        <div className={styles["job-container"]} key={jobInfo.id}>
            <div className={"company-info-container"}>
                <CompanyLogo jobInfo={jobInfo} />
            </div>
            <div className={styles["job-info-container"]}>
                <JobTitle jobInfo={jobInfo} />
                <CompanyName jobInfo={jobInfo} />
                <JobLocation jobInfo={jobInfo} />

                {expandView ? (
                    <>
                        <CollapseButton setExpandView={setExpandView} />
                        <JobDescription jobInfo={jobInfo} />
                    </>
                ) : (
                    <ExpandButton setExpandView={setExpandView} />
                )}

                <JobLink jobInfo={jobInfo} />
            </div>
        </div>
    );
};
const JobsList = ({ location, jobsData, setJobsData }) => {
    return (
        <div className={styles["jobs-container"]}>
            <JobsListHeader location={location} />
            <BackButton setJobsData={setJobsData} />

            {jobsData.length ? (
                <ul className={styles["jobs-list"]} data-testid="jobs-list">
                    {jobsData.map(job => {
                        return <JobsListItem jobInfo={job} />;
                    })}
                </ul>
            ) : (
                <NoJobsMessage />
            )}
        </div>
    );
};

export default JobsList;
