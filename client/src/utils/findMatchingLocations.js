const removeSpacesLowercase = string => {
    return string.replace(/\s+/g, "").toLowerCase();
};
const findMatchingLocations = (inputString, citiesList) => {
    const strippedLowercaseInput = removeSpacesLowercase(inputString);
    const matchingCities = citiesList.filter(city =>
        removeSpacesLowercase(city).startsWith(strippedLowercaseInput)
    );
    return matchingCities;
};

export default findMatchingLocations;
