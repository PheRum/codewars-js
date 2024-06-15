import { simpleMultiplication } from "./index";

describe("Tests", () => {
    it("example", () => {
        expect(simpleMultiplication(2)).toBe(16);
        expect(simpleMultiplication(1)).toBe(9);
        expect(simpleMultiplication(8)).toBe(64);
        expect(simpleMultiplication(4)).toBe(32);
        expect(simpleMultiplication(5)).toBe(45);
    });
});
