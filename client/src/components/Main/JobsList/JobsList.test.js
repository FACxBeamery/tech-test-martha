import React from "react";
import ReactDOM from "react-dom";
import JobsList from "./JobsList.js";
import dummyData from "../../../data/dummyData";
import "@testing-library/jest-dom/extend-expect";

import { render, fireEvent } from "@testing-library/react";

describe("Testing the jobs list", () => {
    test("All jobs in data should be rendered", () => {
        const { getByText, getAllByText, getByTestId } = render(
            <JobsList jobsData={dummyData} />
        );
        const jobsList = getByTestId("jobs-list");
        expect(jobsList.children).toHaveLength(dummyData.length);
    });

    test("Clicking on expand should show description", () => {
        const { getByText, getAllByText, queryByTestId } = render(
            <JobsList jobsData={dummyData} />
        );
        const firstExpandButton = getAllByText("Expand Information")[0];

        let jobDescription = queryByTestId("job-description");
        expect(jobDescription).toBeNull();

        fireEvent.click(firstExpandButton);
        expect(firstExpandButton).not.toBeInTheDocument();

        const collapseButton = getByText("Collapse");
        jobDescription = queryByTestId("job-description");
        expect(jobDescription).toBeInTheDocument();

        fireEvent.click(collapseButton);

        expect(collapseButton).not.toBeInTheDocument();
        expect(jobDescription).not.toBeInTheDocument();
    });
});
