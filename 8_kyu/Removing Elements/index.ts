export function removeEveryOther<T>(arr: T[]): T[] {
    return arr.filter((el, idx) => idx % 2 === 0);
}
