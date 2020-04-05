export type CellShape = {
    isImmutable: boolean;
    currentValue: number;
    solvedValue: number;
    candidates: number[];

    row: number;
    column: number;
    block: number;
};
