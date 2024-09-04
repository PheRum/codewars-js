export function calculateTip(amount: number, rating: string): number {
    let percent = 0;

    switch (rating.toLowerCase()) {
        case 'terrible':
            percent = 0;
            break;
        case 'poor':
            percent = 5;
            break;
        case 'good':
            percent = 10;
            break;
        case 'great':
            percent = 15;
            break;
        case 'excellent':
            percent = 20;
            break;
        default:
            throw new Error('Rating not recognised');
    }

    return Math.ceil((amount / 100) * percent);
}
