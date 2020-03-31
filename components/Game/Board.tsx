import styled from 'styled-components';

import dummyBoard from '../../temp/dummyBoard';
import Cell from './Cell';

const Sudoku = styled.div`
    display: grid;
    grid-template-columns: repeat(9, 1fr);
`;

export default function Board() {
    return (
        <div>
            <h1>Sup</h1>
            <Sudoku>
                {dummyBoard.map((item: any, i: number) => {
                    return <Cell {...item} key={i} />;
                })}
            </Sudoku>
        </div>
    );
}
