export function getCount(str: string) {
    const allowed = ['a', 'e', 'i', 'o', 'u'];

    return str.split('').filter((l) => allowed.includes(l)).length;
}
