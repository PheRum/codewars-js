export function twoSort(s: string[]): string {
    const first = s.sort()[0];

    return first.split("").join("*".repeat(3));
}
