import { printArray } from "./index";

describe("Tests", () => {
    it("printArray", () => {
        expect(printArray([2, 4, 5, 2])).toBe("2,4,5,2");
    });
});
