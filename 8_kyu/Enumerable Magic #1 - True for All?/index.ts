export function all(arr: number[], fun: (n: number) => boolean): boolean {
    return arr.every(fun);
}
