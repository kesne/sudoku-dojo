import styled from 'styled-components';

type Props = {
    isImmutable: boolean;
    currentValue: number;
    solvedValue: number; //this may not be necessary
    pencilMarks: number[];
};

export default function Cell({
    isImmutable,
    currentValue,
    solvedValue,
    pencilMarks
}: Props) {
    return (
        <div>
            <p>{currentValue}</p>
        </div>
    );
}
