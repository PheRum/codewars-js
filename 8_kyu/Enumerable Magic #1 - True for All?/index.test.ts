import { all } from "./index";

describe("Tests", () => {
    it("all", () => {
        expect(all([1, 2, 3, 4, 5], (v) => v < 9)).toBe(true);
        expect(all([1, 2, 3, 4, 5], (v) => v > 9)).toBe(false);
    });
});
