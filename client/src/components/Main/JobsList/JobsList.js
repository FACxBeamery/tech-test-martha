import React, { useState } from "react";
import styles from "./JobsList.module.css";

// TODO add capitaliez first letter
const JobsListHeader = ({ location }) => {
    return <h2 className="jobs-list-header">{`Jobs in ${location}`}</h2>;
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
const CompanyName = ({ jobInfo }) => {
    return <h4 className={styles["company-name"]}>{jobInfo.company}</h4>;
};

const CompanyLogo = ({ jobInfo }) => {
    return (
        <img
            className={styles["company-logo"]}
            src={jobInfo.company_logo}
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
            className={styles["collapse-button"]}
            onClick={e => setExpandView(false)}
        >
            Collapse
        </button>
    );
};

const ExpandButton = ({ setExpandView }) => {
    return (
        <button
            className={styles["expand-button"]}
            onClick={e => setExpandView(true)}
        >
            Expand Information
        </button>
    );
};

//TODO make link owrk!!!
const JobLink = ({ jobInfo }) => {
    return <a href={jobInfo.url}>take me to website</a>;
};
const JobsListItem = ({ jobInfo }) => {
    const [expandView, setExpandView] = useState(false);
    return (
        //TODO use markdownifier for description
        <div className={styles["job-container"]} key={jobInfo.id}>
            <div className={"company-info-container"}>
                <CompanyLogo jobInfo={jobInfo} />
                <CompanyName jobInfo={jobInfo} />
            </div>
            <div className={styles["job-info-container"]}>
                <JobTitle jobInfo={jobInfo} />
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
        <>
            <JobsListHeader location={location} />
            <BackButton setJobsData={setJobsData} />
            <ul className={styles["jobs-list"]} data-testid="jobs-list">
                {jobsData.map(job => {
                    return <JobsListItem jobInfo={job} />;
                })}
            </ul>
        </>
    );
};

export default JobsList;
