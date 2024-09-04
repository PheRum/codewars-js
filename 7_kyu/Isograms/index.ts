export function isIsogram(str: string) {
    const array = str.toLowerCase().split('');

    return str.toLowerCase().length === [...new Set(array)].length;
}
