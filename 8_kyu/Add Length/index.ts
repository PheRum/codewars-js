export function addLength(text: string) {
    const words = text.split(" ");

    return words.map((word) => `${word} ${word.length}`);
}
