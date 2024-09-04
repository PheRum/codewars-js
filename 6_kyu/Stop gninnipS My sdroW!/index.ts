export function spinWords(words: string): string {
    const wordReverse = (w: string) => w.split('').reverse().join('');

    return words
        .split(' ')
        .map((word) => (word.length >= 5 ? wordReverse(word) : word))
        .join(' ');
}
