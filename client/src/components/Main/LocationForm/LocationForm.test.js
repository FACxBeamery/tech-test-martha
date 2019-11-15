import React from "react";
import ReactDOM from "react-dom";
import JobsList from "./LocationForm.js";
import "@testing-library/jest-dom/extend-expect";

import { render, fireEvent } from "@testing-library/react";
import LocationForm from "./LocationForm.js";

describe("location form works as expected", () => {
    test("entering 2 letters brings up autocomplete", () => {
        const { getByLabelText, queryByTestId } = render(<LocationForm />);
        const searchbar = getByLabelText("Enter a city:");

        let suggestionsList = queryByTestId("suggestions-list");
        expect(suggestionsList).toBeNull();

        fireEvent.change(searchbar, { target: { value: "lo" } });

        suggestionsList = queryByTestId("suggestions-list");
        expect(suggestionsList).toBeInTheDocument();
    });

    test("Clicking on advanced search brings up advanced options", () => {
        const { getByText, queryByTestId } = render(<LocationForm />);

        const advancedSearchButton = getByText("Advanced Search");

        let advancedSearchForm = queryByTestId("advanced-search-form");
        expect(advancedSearchForm).not.toBeInTheDocument();

        fireEvent.click(advancedSearchButton);

        expect(advancedSearchButton).not.toBeInTheDocument();

        advancedSearchForm = queryByTestId("advanced-search-form");
        expect(advancedSearchForm).toBeInTheDocument();
    });
    // test("Going up and down on autocomplete gives class expected", () => {
    //     const { getByText, getByLabelText, queryByTestId } = render(
    //         <LocationForm />
    //     );
    //     const searchbar = getByLabelText("Enter a city:");

    //     fireEvent.change(searchbar, { target: { value: "lo" } });

    //     const suggestionsList = queryByTestId("suggestions-list");

    //     const LongBeachSuggestion = getByText("Long Beach");
    //     expect(LongBeachSuggestion).toHaveClass("active-suggestion");

    //     const LorainSuggestion = getByText("Lorain");
    //     expect(LorainSuggestion).toHaveClass("suggestions-li");
    //     searchbar.addEventListener("keydown", console.log);

    //     // const event = new KeyboardEvent("keydown", { keyCode: 40 });
    //     // searchbar.dispatchEvent(event);
    //     fireEvent.keyDown(LongBeachSuggestion, {
    //         key: "Down",
    //         code: 40,
    //         charCode: 40
    //     });

    //     expect(LorainSuggestion).toHaveClass("active-suggestion");
    //     expect(LongBeachSuggestion).toHaveClass("suggestions-li");

    //     expect(suggestionsList).toHaveClass("active-suggestion");
    // });
    // test("Hover on autocomplete gives class selected", () => {});
    // test("Click on autocomplete item gives class selected", () => {
    //     const { getByText, getByLabelText, queryByTestId } = render(
    //         <LocationForm />
    //     );
    //     const searchbar = getByLabelText("Enter a city:");

    //     fireEvent.change(searchbar, { target: { value: "lo" } });

    //     const suggestionsList = queryByTestId("suggestions-list");

    //     const LongBeachSuggestion = getByText("Long Beach");

    //     fireEvent.click(LongBeachSuggestion);

    //     expect(searchbar).toHaveValue("Long Beach");

    //     expect(suggestionsList).toHaveClass("active-suggestion");
    // });
});
