export function isPangram(phrase: string): boolean {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
    phrase = phrase.toLowerCase();
    return alphabets.every((x) => phrase.includes(x));
}
