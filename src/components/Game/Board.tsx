import { createContext } from 'react';
import styled from 'styled-components';

import useSudokuBoard from '../useSudokuBoard';
import { CellShape } from '../../lib/CellShape';
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

//it will SCREAM if I don't use this interface to force 'selected' to [number, number]
interface TESTEROONI {
    selected: Readonly<[number, number]>;
    dispatch: any;
}
const defaultState: TESTEROONI = { selected: [0, 0], dispatch: null };
export const GameContext = createContext(defaultState);
const { Provider } = GameContext;

export default function Board() {
    const [state, dispatch] = useSudokuBoard();
    const { selected, blocks } = state;

    const blockComponents = blocks.map((cells: CellShape[]) => {
        return <Block cells={cells} key={cells[0].block} />;
    });

    return (
        <Sudoku>
            <Provider value={{ selected, dispatch }}>
                {blockComponents}
            </Provider>
        </Sudoku>
    );
}
