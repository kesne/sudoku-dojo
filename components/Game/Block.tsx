import styled from 'styled-components';

import { CellShape } from '../../temp/CellShapes';
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
    return (
        <Grid>
            {cells.map((cell: CellShape) => {
                return cell.currentValue === 0 ? (
                    <Little
                        candidates={cell.candidates}
                        key={`${cell.row} ${cell.column}`}
                    />
                ) : (
                    <Big
                        isImmutable={cell.isImmutable}
                        currentValue={cell.currentValue}
                        key={`${cell.row} ${cell.column}`}
                    />
                );
            })}
        </Grid>
    );
}
