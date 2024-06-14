import { distinct } from "./index";

describe("Tests", () => {
    it("example", () => {
        expect(distinct([1])).toEqual([1]);
        expect(distinct([1, 2])).toEqual([1, 2]);
        expect(distinct([1, 1, 2])).toEqual([1, 2]);
        expect(distinct(["1", "1", "2"])).toEqual(["1", "2"]);
    });
});
