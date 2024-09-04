import { uefaEuro2016 } from './index';

describe('Tests', () => {
    it('example', () => {
        expect(uefaEuro2016(['Germany', 'Ukraine'], [2, 0])).toBe('At match Germany - Ukraine, Germany won!');
        expect(uefaEuro2016(['Belgium', 'Italy'], [0, 2])).toBe('At match Belgium - Italy, Italy won!');
        expect(uefaEuro2016(['Portugal', 'Iceland'], [1, 1])).toBe('At match Portugal - Iceland, teams played draw.');
    });
});
