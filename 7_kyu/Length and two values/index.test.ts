import { alternate } from "./index";

describe("Tests", () => {
    it("small arrays", () => {
        expect(alternate(5, true, false)).toEqual([true, false, true, false, true]);
    });

    it("larger arrays", () => {
        expect(alternate(20, "blue", "red")).toEqual([
            "blue",
            "red",
            "blue",
            "red",
            "blue",
            "red",
            "blue",
            "red",
            "blue",
            "red",
            "blue",
            "red",
            "blue",
            "red",
            "blue",
            "red",
            "blue",
            "red",
            "blue",
            "red",
        ]);
    });

    it("with 0", () => {
        expect(alternate(0, "lemons", "apples")).toEqual([]);
    });
});
