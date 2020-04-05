import { CellShape } from './CellShape';

const ROW_LENGTH = 9;

const floor3 = (num: number) => Math.floor((num - 1) / 3);
const getPosition = (index: number) => {
    const row = 1 + Math.floor(index / ROW_LENGTH);
    const column = 1 + index - ROW_LENGTH * (row - 1);
    const block = 3 * floor3(row) + (1 + floor3(column));
    return { row, column, block };
};

export default function createBoard(puzzle: string, solution: string) {
    if (puzzle.length !== 81 || solution.length !== 81) {
        throw new Error('Wrong Puzzle Length LMAO');
    }

    const board: CellShape[][] = Array.from({ length: 9 }, () => []);
    for (let i = 0; i < 81; i++) {
        const { row, column, block } = getPosition(i);
        board[block - 1].push({
            isImmutable: puzzle[i] === solution[i],
            currentValue: parseInt(puzzle[i], 10),
            solvedValue: parseInt(solution[i], 10),
            candidates: [],

            row,
            column,
            block,
        });
    }
    return board;
}
