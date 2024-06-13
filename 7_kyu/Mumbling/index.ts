export function accum(s: string) {
    return s
        .split("")
        .map((letter, index) => {
            return letter.toUpperCase() + letter.toLowerCase().repeat(index);
        })
        .join("-");
}
