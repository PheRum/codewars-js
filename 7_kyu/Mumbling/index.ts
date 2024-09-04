export function accum(s: string) {
    return s
        .split('')
        .map((letter, index) => letter.toUpperCase() + letter.toLowerCase().repeat(index))
        .join('-');
}
