export function contamination(text: string, char: string): string {
    return text
        .split('')
        .map((_) => char)
        .join('');
}
