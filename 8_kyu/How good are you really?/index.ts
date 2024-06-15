export function betterThanAverage(classPoints: number[], yourPoints: number): boolean {
    const average = classPoints.reduce((a, b) => a + b, 0) / classPoints.length;

    return average <= yourPoints;
}
