import { mergeArrays } from "./index";

describe("Tests", () => {
    it("Example Tests", function () {
        expect(mergeArrays([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
        expect(mergeArrays([2, 4, 8], [2, 4, 6])).toEqual([2, 4, 6, 8]);
    });
});
