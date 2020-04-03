export type CellShape = {
    isImmutable: boolean;
    currentValue: number;
    solvedValue: number;
    candidates: number[];

    row: number;
    column: number;
    block: number;
};
export type BigNumberShape = {
    isImmutable: boolean;
    currentValue: number;
};
export type LittleNumberShape = {
    candidates: number[];
};
