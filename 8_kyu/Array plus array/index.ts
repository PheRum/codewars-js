export function arrayPlusArray(arr1: number[], arr2: number[]): number {
    return [...arr1, ...arr2].reduce((acc, cur) => acc + cur, 0);
}
