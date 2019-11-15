import React from "react";
import ReactDOM from "react-dom";
import findMatchingLocations from "./findMatchingLocations";

describe("Locations with matching letters are returned", () => {
    const citiesList = ["Aardvark", "a a a b", "aAbb", "CCcc"];

    test("matches first 2 letters of word", () => {
        const actual = findMatchingLocations("aa", citiesList);
        expect(actual).toEqual(["Aardvark", "a a a b", "aAbb"]);
    });

    test("returns empty array when none match", () => {
        const actual = findMatchingLocations("fdlk", citiesList);
        expect(actual).toEqual([]);
    });
});
