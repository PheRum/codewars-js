import { contamination } from "./index";

describe("Tests", () => {
    it("contamination", () => {
        expect(contamination("abc", "z")).toBe("zzz");
        expect(contamination("", "z")).toBe("");
        expect(contamination("abc", "")).toBe("");
        expect(contamination("_3ebzgh4", "&")).toBe("&&&&&&&&");
        expect(contamination("//case", " ")).toBe("      ");
    });
});
