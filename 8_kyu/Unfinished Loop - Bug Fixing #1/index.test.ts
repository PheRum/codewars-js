import { createArray } from "./index";

describe("Tests", () => {
    it("example", () => {
        expect(createArray(1)).toEqual([1]);
        expect(createArray(2)).toEqual([1, 2]);
        expect(createArray(3)).toEqual([1, 2, 3]);
        expect(createArray(4)).toEqual([1, 2, 3, 4]);
        expect(createArray(5)).toEqual([1, 2, 3, 4, 5]);
    });
});
