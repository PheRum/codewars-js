export function consonantCount(str: string): number {
    const vowels = ["a", "e", "i", "o", "u"];

    const letters = str.split("");

    return letters
        .filter((letter) => letter.match(/[a-z]+/gi))
        .filter((letter) => !vowels.includes(letter.toLowerCase())).length;
}
