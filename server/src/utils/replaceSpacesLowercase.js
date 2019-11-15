const replaceSpacesLowercase = str => {
    let newString = str.trim();
    newString = newString.replace(/ /g, "+").toLowerCase();
    return newString;
};

module.exports = replaceSpacesLowercase;
