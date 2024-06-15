import { canEscape } from "./index";

describe("Tests", () => {
    function act(expected: boolean, walls: number[][]) {
        const userSol = canEscape(walls.map((t) => t.slice()));
        expect(expected).toBe(userSol);
    }

    describe("Sample tests", () => {
        it("Walk in the park", () => {
            act(true, [
                [7, 7],
                [7, 7],
                [7, 7],
                [7, 7],
            ]);
        });

        it("Close call", () => {
            act(true, [
                [2, 2],
                [3, 3],
                [4, 4],
            ]);
        });

        it("Another close escape", () => {
            act(true, [
                [2, 8],
                [7, 3],
                [6, 4],
            ]);
        });

        it("So close .. but we can't make it", () => {
            act(false, [
                [2, 2],
                [3, 3],
                [3, 4],
            ]);
        });

        it("We stand no chance", () => {
            act(false, [
                [3, 3],
                [1, 1],
                [3, 3],
            ]);
        });

        it("Walls have already closed", () => {
            act(false, [
                [7, 7],
                [0, 0],
                [7, 7],
            ]);
        });
    });
});
