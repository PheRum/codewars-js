export function array(string: string): string | null {
    return string.split(',').slice(1, -1).join(' ') || null;
}
