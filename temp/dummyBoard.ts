//wip
const dummyBoard = [];

for (let i = 1; i <= 81; i++) {
    dummyBoard.push({
        isImmutable: true,
        currentValue: i,
        solvedValue: i,
        pencilMarks: []
    });
}

export default dummyBoard;
