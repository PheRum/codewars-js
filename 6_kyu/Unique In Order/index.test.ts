import { uniqueInOrder } from "./index";

describe("Tests", () => {
    it("example", () => {
        expect(uniqueInOrder("AAAABBBCCDAABBB")).toEqual(["A", "B", "C", "D", "A", "B"]);
    });
});
