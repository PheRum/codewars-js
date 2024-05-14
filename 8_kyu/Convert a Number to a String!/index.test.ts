import { numberToString } from "./index";

describe("numberToString", function () {
    it("should work correctly", () => {
        expect(numberToString(67)).toBe("67");
    });
});
