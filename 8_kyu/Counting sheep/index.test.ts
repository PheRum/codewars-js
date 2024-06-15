import { countSheeps } from "./index";

const array1 = [
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
];

describe("countSheeps", function () {
    it("should work correctly", () => {
        const result1 = countSheeps(array1);
        expect(result1).toEqual(17);
    });
});
