const floor3 = (num: number) => Math.floor((num - 1) / 3);

export default function getPosition(index: number) {
    const row = 1 + Math.floor(index / 9);
    const column = 1 + index - 9 * (row - 1);
    const block = 3 * floor3(row) + (1 + floor3(column));
    return [row, column, block];
}
