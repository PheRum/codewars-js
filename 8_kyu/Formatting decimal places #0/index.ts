export function shortenToDate(longDate: string): string {
    const [day, mounth, number] = longDate.split(' ');

    return `${day} ${mounth} ${number.replace(',', '')}`;
}
