import { isIsogram } from "./index";

describe("Tests", () => {
    it("example", () => {
        expect(isIsogram("Dermatoglyphics")).toBe(true);
        expect(isIsogram("isogram")).toBe(true);
        expect(isIsogram("aba")).toBe(false);
        expect(isIsogram("moOse")).toBe(false);
        expect(isIsogram("isIsogram")).toBe(false);
        expect(isIsogram("")).toBe(true);
    });
});
