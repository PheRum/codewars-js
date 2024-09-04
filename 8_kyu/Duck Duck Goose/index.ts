type PlayerType = {
    name: string;
};

export function duckDuckGoose(players: PlayerType[], goose: number): string {
    const idx = (goose - 1) % players.length;

    return players[idx].name;
}
