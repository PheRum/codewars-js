export function abbrevName(name: string): string {
    const names = name.split(" ").map((name) => name[0].toUpperCase());

    return names.join(".");
}
