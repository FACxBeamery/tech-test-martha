import paramsString from "./paramsString";

describe("params string should return correct list of params", () => {
    test("it works with 3 params", () => {
        const actual = paramsString("london", "a nice job", true);
        const expected =
            "?location=london&description=a nice job&full_time=true";
        expect(actual).toEqual(expected);
    });
    test("it works with no location", () => {
        const actual = paramsString(null, "a fun job", true);
        const expected = "?description=a fun job&full_time=true";

        expect(actual).toEqual(expected);
    });
    test("it works with only full time", () => {
        const actual = paramsString(null, null, true);
        const expected = "?full_time=true";

        expect(actual).toEqual(expected);
    });
    test("it works with no params", () => {
        const actual = paramsString(null, null, null);
        const expected = "";

        expect(actual).toEqual(expected);
    });
});
