import { CellShape } from './CellShapes';
import getPosition from './getPosition';

const dummyBoard: CellShape[][] = Array(9).fill([]);
const puzzle =
    '203108000800000742900720803098073060060000439031960070007805300000030607080097500';
const solution =
    '273148956816359742945726813498273165762581439531964278627815394159432687384697521';

for (let i = 0; i < 81; i++) {
    const [row, column, block] = getPosition(i);
    dummyBoard[block - 1] = [
        ...dummyBoard[block - 1],
        {
            isImmutable: puzzle[i] === solution[i],
            currentValue: parseInt(puzzle[i]),
            solvedValue: parseInt(solution[i]),
            candidates: [],

            row,
            column,
            block,
        },
    ];
}

export default dummyBoard;
