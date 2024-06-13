export function count(string: string) {
    const letters = string.split("");
    let output: { [key: string]: number } = {};

    letters.forEach((letter) => {
        if (!output[letter]) {
            output[letter] = 0;
        }

        output[letter]++;
    });

    return output;
}
