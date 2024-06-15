import { toCamelCase } from "./index";

describe("Tests", () => {
    it("example", () => {
        expect(toCamelCase("")).toBe("");
        expect(toCamelCase("the_stealth_warrior")).toBe("theStealthWarrior");
        expect(toCamelCase("The-Stealth-Warrior")).toBe("TheStealthWarrior");
        expect(toCamelCase("A-B-C")).toBe("ABC");
    });
});
