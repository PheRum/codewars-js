import { first } from "./index";

describe("Tests", () => {
    it("example", () => {
        const arr = ["a", "b", "c", "d", "e"];
        expect(first([...arr])).toEqual(["a"]);
        expect(first([...arr], 2)).toEqual(["a", "b"]);
    });
});
