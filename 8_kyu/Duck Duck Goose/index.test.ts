import { duckDuckGoose } from './index';

class Player {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

let exNames = ['a', 'b', 'c', 'd', 'c', 'e', 'f', 'g', 'h', 'z'];
let players = exNames.map((n) => new Player(n));

describe('fixed tests', function () {
    it('should find the correct goose', function () {
        expect(duckDuckGoose(players, 1)).toBe('a');
        expect(duckDuckGoose(players, 3)).toBe('c');
        expect(duckDuckGoose(players, 10)).toBe('z');
        expect(duckDuckGoose(players, 20)).toBe('z');
        expect(duckDuckGoose(players, 30)).toBe('z');
        expect(duckDuckGoose(players, 18)).toBe('g');
        expect(duckDuckGoose(players, 28)).toBe('g');
        expect(duckDuckGoose(players, 12)).toBe('b');
        expect(duckDuckGoose(players, 2)).toBe('b');
        expect(duckDuckGoose(players, 7)).toBe('f');
    });
});
