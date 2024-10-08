import { removeEveryOther } from './index';

describe('Tests', () => {
    it('example', () => {
        expect(removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])).toEqual(['Hello', 'Hello Again']);
        expect(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([1, 3, 5, 7, 9]);
        expect(removeEveryOther([[1, 2]])).toEqual([[1, 2]]);
        expect(removeEveryOther([['Goodbye'], { Great: 'Job' }])).toEqual([['Goodbye']]);
    });
});
