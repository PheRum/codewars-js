describe('Tests', function () {
    it('gooseFilter', function () {
        expect(gooseFilter(['Mallard', 'Hook Bill', 'African', 'Crested', 'Pilgrim', 'Toulouse', 'Blue Swedish'])).
        toEqual(['Mallard', 'Hook Bill', 'Crested', 'Blue Swedish']);
    });
    it('No geese', function () {
        expect(gooseFilter(['Mallard', 'Barbary', 'Hook Bill', 'Blue Swedish', 'Crested'])).
        toEqual(['Mallard', 'Barbary', 'Hook Bill', 'Blue Swedish', 'Crested']);
    });
    it('All geese', function () {
        expect(gooseFilter(['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'])).toEqual([]);
    });
});
