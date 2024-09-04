export function strCount(str: string, letter: string): number {
    return str.split('').filter((l) => l === letter).length;
}
