import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Main from "./Main";
import "@testing-library/jest-dom/extend-expect";

import {
    render,
    fireEvent,
    waitForElement,
    queryByTestId
} from "@testing-library/react";

import dummyData from "../../data/dummyData";

test("Submitting text in searchbar shows jobs list", async () => {
    const mockAxiosGet = jest.spyOn(axios, "get");
    mockAxiosGet.mockImplementation(() => Promise.resolve({ data: dummyData }));

    const { getByText, getByLabelText, getByTestId } = render(<Main />);

    const searchbar = getByLabelText("Enter a city:");
    fireEvent.change(searchbar, { target: { value: "London" } });

    const submitButton = getByText("Search Jobs");
    fireEvent.click(submitButton);

    await waitForElement(() => getByTestId("jobs-list"));
    const jobsList = getByTestId("jobs-list");

    expect(jobsList).toBeInTheDocument();
    expect(searchbar).not.toBeInTheDocument();
    mockAxiosGet.mockRestore();
});

test("Clicking back button goes back to search", async () => {
    const mockAxiosGet = jest.spyOn(axios, "get");
    mockAxiosGet.mockImplementation(() => Promise.resolve({ data: dummyData }));

    const { getByText, getByLabelText, getByTestId, queryByTestId } = render(
        <Main />
    );

    const searchbar = getByLabelText("Enter a city:");
    fireEvent.change(searchbar, { target: { value: "London" } });

    const submitButton = getByText("Search Jobs");
    fireEvent.click(submitButton);

    await waitForElement(() => queryByTestId("jobs-list"));

    expect(searchbar).not.toBeInTheDocument();

    const backButton = getByText("Back to search");

    fireEvent.click(backButton);
    expect(backButton).not.toBeInTheDocument();

    mockAxiosGet.mockRestore();
});
