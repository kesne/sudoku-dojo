import styled from 'styled-components';

import dummyBoard from '../../temp/dummyBoard';
import { CellShape } from '../../temp/CellShapes';
import Block from './Block';

const Sudoku = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    width: 540px;
    height: 540px;
    margin: 100px auto;

    border: 1px solid black;
`;

export default function Board() {
    return (
        <Sudoku>
            {dummyBoard.map((cells: CellShape[], i: number) => {
                return <Block cells={cells} key={i} />;
            })}
        </Sudoku>
    );
}
