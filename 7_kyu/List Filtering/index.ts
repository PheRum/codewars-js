export function filterList(letters: (string | number)[]): (string | number)[] {
    return letters.filter(Number.isInteger);
}
