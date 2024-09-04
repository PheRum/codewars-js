export function hexHash(code: string): number {
    return [...code]
        .map((char) => char.charCodeAt(0).toString(16))
        .toString()
        .replace(/,|\D/g, '')
        .split('')
        .reduce((acc, cur) => acc + +cur, 0);
}
