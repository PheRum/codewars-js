export function toCamelCase(str: string): string {
    if (!str.length) {
        return "";
    }

    return str
        .split(new RegExp("[_\\-]"))
        .map((w, index) => (index > 0 ? w[0].toUpperCase() + w.slice(1) : w))
        .join("");
}
