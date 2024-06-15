import { solution } from "./index";

describe("Tests", () => {
    it("example", () => {
        expect(solution("world")).toBe("dlrow");
        expect(solution("hello")).toBe("olleh");
        expect(solution("")).toBe("");
        expect(solution("h")).toBe("h");
    });
});
