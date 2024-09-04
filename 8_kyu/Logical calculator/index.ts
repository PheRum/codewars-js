type OperatorType = 'AND' | 'OR' | 'XOR';

export function logicalCalc(array: boolean[], op: OperatorType): boolean | undefined {
    const operator = op.toUpperCase();

    switch (operator) {
        case 'AND':
            return array.reduce((item, cur) => item && cur);
        case 'OR':
            return array.reduce((item, cur) => item || cur);
        case 'XOR':
            return array.reduce((item, cur) => item !== cur);
    }
}
