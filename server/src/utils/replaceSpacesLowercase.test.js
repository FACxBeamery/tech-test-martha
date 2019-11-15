const replaceSpacesLowercase = require("./replaceSpacesLowercase");

describe("replace spaces lowercase works as expected", () => {
    test("Works with multiple spaces", () => {
        const actual = replaceSpacesLowercase("H e lL o");
        const expected = "h+e+ll+o";

        expect(actual).toEqual(expected);
    });
    test("works with spaces at the start and end", () => {
        const actual = replaceSpacesLowercase("   B   ");
        const expected = "b";

        expect(actual).toEqual(expected);
    });
    test("works with empty string", () => {
        const actual = replaceSpacesLowercase("");
        const expected = "";

        expect(actual).toEqual(expected);
    });
});
