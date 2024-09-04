import { array } from './index';

describe('Tests', () => {
    function test(string: string, expected: string | null) {
        it(`string='${string}'`, function () {
            expect(array(string)).toBe(expected);
        });
    }

    test('', null);
    test('1', null);
    test('A1,B2', null);
    test('1,2,3', '2');
    test('1,2,3,4', '2 3');
    test('A1,B2,C3,D4,E5', 'B2 C3 D4');
    test('A,1,23,456,78,9,Z', '1 23 456 78 9');
});
