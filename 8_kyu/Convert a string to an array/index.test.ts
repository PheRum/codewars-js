import { stringToArray } from './index';

describe('Tests', () => {
    it('example', () => {
        expect(stringToArray('Robin Singh')).toEqual(['Robin', 'Singh']);
        expect(stringToArray('I love arrays they are my favorite')).toEqual(['I', 'love', 'arrays', 'they', 'are', 'my', 'favorite']);
    });
});
