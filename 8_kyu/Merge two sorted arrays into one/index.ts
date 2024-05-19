export function mergeArrays(arr1: number[], arr2: number[]): number[] {
    return [...new Set(arr1.concat(arr2))].sort((a, b) => a - b);
}
