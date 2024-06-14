export function distinct<T>(a: T[]): T[] {
    return [...new Set(a)];
}
