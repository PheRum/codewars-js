export function arr2bin<T>(arr: T[]): string {
    return arr.reduce((prev, curr) => prev + (typeof curr === 'number' ? curr : 0), 0).toString(2);
}
