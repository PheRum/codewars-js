export function correct(text: string): string {
    return text.replace(/5/g, 'S').replace(/0/g, 'O').replace(/1/g, 'I');
}
