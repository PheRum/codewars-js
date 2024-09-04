export function fakeBin(x: string): string {
    const numbers = x.split('');

    return numbers.map((num) => (+num < 5 ? 0 : 1)).join('');
}
