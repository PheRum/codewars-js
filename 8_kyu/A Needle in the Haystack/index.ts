export function findNeedle(haystack: (string | boolean | number | undefined)[]): string {
    return 'found the needle at position ' + haystack.indexOf('needle');
}
