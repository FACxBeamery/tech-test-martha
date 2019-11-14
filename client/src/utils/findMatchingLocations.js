import citiesList from "../data/citiesList";

const removeSpacesLowercase = string => {
    return string.replace(/^\s+|\s+$/g, "").toLowerCase();
};
const findMatchingLocations = inputString => {
    const strippedLowercaseInput = removeSpacesLowercase(inputString);

    const matchingCities = citiesList.filter(city =>
        removeSpacesLowercase(city).startsWith(strippedLowercaseInput)
    );
    return matchingCities;
};

export default findMatchingLocations;
