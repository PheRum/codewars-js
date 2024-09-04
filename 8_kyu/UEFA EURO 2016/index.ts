export function uefaEuro2016(teams: string[], scores: number[]): string {
    const [scoreA, scoreB] = scores;
    const teamsJoin = teams.join(' - ');

    if (scoreA > scoreB) {
        return `At match ${teamsJoin}, ${teams[0]} won!`;
    }

    if (scoreA < scoreB) {
        return `At match ${teamsJoin}, ${teams[1]} won!`;
    }

    return `At match ${teamsJoin}, teams played draw.`;
}
