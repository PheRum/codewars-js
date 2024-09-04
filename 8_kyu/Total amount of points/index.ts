export function points(games: string[]): number {
    let result = 0;

    games.forEach((game) => {
        const [x, y] = game.split(':');

        if (x > y) {
            result += 3;
        }

        if (x === y) {
            result += 1;
        }
    });

    return result;
}
