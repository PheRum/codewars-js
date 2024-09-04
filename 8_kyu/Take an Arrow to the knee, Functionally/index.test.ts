import { arrowFunc } from './index';

describe('Tests', () => {
    it('arrowFunc', () => {
        expect(arrowFunc([84, 101, 115, 116])).toEqual('Test');
        expect(arrowFunc([70, 85, 83, 32, 82, 79, 72, 32, 68, 65, 72])).toEqual('FUS ROH DAH');
    });
});
