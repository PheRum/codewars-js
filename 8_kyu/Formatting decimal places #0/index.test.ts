import { shortenToDate } from "./index";

describe("Tests", () => {
    it("shortenToDate", () => {
        expect(shortenToDate("Friday May 2, 9am")).toBe("Friday May 2");
        expect(shortenToDate("Tuesday January 29, 10pm")).toBe("Tuesday January 29");
        expect(shortenToDate("Monday December 25, 10pm")).toBe("Monday December 25");
    });
});
