import styled from 'styled-components';

import { CellShape } from '../../lib/CellShape';
import Big from './Cell/Big';
import Little from './Cell/Little';

type Props = {
    cells: CellShape[];
};

const Grid = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    border: 1px solid black;
`;

export default function Block({ cells }: Props) {
    const cellComponents = cells.map((cell: CellShape) => {
        const shouldDisplayLittle = !cell.currentValue && cell.candidates;

        return shouldDisplayLittle ? (
            <Little {...cell} key={`${cell.row} ${cell.column}`} />
        ) : (
            <Big {...cell} key={`${cell.row} ${cell.column}`} />
        );
    });

    return <Grid>{cellComponents}</Grid>;
}
