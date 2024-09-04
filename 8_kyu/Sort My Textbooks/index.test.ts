import { sorter } from './index';

describe('Tests', () => {
    it('Basic', () => {
        expect(sorter(['Algebra', 'History', 'Geometry', 'English'])).toEqual(['Algebra', 'English', 'Geometry', 'History']);
    });
    it('Capitalization', () => {
        expect(sorter(['Algebra', 'history', 'Geometry', 'english'])).toEqual(['Algebra', 'english', 'Geometry', 'history']);
    });
    it('Symbols', () => {
        expect(sorter(['Alg#bra', '$istory', 'Geom^try', '**english'])).toEqual(['$istory', '**english', 'Alg#bra', 'Geom^try']);
    });
});
