import { betterThanAverage } from "./index";

describe("Tests", () => {
    it("betterThanAverage([2, 3], 5) should return True", () => {
        expect(betterThanAverage([2, 3], 5)).toBe(true);
    });

    it("betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75) should return True", () => {
        expect(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)).toBe(true);
    });

    it("betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9) should return False", () => {
        expect(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)).toBe(false);
    });

    it("betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50) should return False", () => {
        expect(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50)).toBe(false);
    });

    it("betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21) should return False", () => {
        expect(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21)).toBe(false);
    });
});
