export function mergeArrays(a: number[], b: number[]): number[] {
    return [...new Set([...a, ...b])].sort((a, b) => a - b);
}
