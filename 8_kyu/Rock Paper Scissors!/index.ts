type RuleType = 'scissors' | 'rock' | 'paper';
type OperatorType = '=' | '<' | '>';

type RulesType = {
    scissors: Record<RuleType, OperatorType>;
    rock: Record<RuleType, OperatorType>;
    paper: Record<RuleType, OperatorType>;
};

export function rps(p1: RuleType, p2: RuleType) {
    const rules: RulesType = {
        scissors: {
            scissors: '=',
            rock: '<',
            paper: '>',
        },
        rock: {
            rock: '=',
            scissors: '>',
            paper: '<',
        },
        paper: {
            paper: '=',
            scissors: '<',
            rock: '>',
        },
    };

    const operator: OperatorType = rules[p1][p2];

    switch (operator) {
        case '>':
            return 'Player 1 won!';
        case '<':
            return 'Player 2 won!';
        case '=':
            return 'Draw!';
    }
}
