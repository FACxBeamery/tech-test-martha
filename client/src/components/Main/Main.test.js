import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Main from "./Main";

import {
    render,
    fireEvent,
    waitForElement,
    queryByTestId
} from "@testing-library/react";

import dummyData from "../../data/dummyData";

test("Submitting text in searchbar shows jobs list", async () => {
    const mockAxiosGet = jest.spyOn(axios, "get");
    mockAxiosGet.mockReturnValue(dummyData);

    const { getByText, getByLabelText, getByTestId } = render(<Main />);

    const searchbar = getByLabelText("Enter a city:");
    fireEvent.change(searchbar, { target: { value: "London" } });

    const submitButton = getByText("Search Jobs");
    fireEvent.click(submitButton);

    const jobsList = await waitForElement(() => getByTestId("jobs-list"));
    expect(jobsList).toBeInTheDocument();
    expect(searchbar).not.toBeInTheDocument();
    mock.restore();
});

test("Clicking back button goes back to search", () => {
    const mockAxiosGet = jest.spyOn(axios, "get");
    mockAxiosGet.mockReturnValue(dummyData);

    const { getByText, getByLabelText, getByTestId } = render(<Main />);

    const searchbar = getByLabelText("Enter a city:");
    fireEvent.change(searchbar, { target: { value: "London" } });

    const submitButton = getByText("Search Jobs");
    fireEvent.click(submitButton);

    const jobsList = await waitForElement(() => getByTestId("jobs-list"));
    
    expect(searchbar).not.toBeInTheDocument();

    const backButton = getByText("Back to search");

    fireEvent.click(backButton);
    expect(backButton).not.toBeInTheDocument();
    expect(searchbar).toBeInTheDocument();
    mock.restore();
});
