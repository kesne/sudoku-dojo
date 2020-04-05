import { useReducer } from 'react';
import dummyBoard from '../lib/dummyBoard';
import reducer from '../lib/reducers';
import { CellShape } from '../lib/CellShape';

interface State {
    dummyBoard: [number, number];
    blocks: CellShape[][];
}

function useSudokuPuzzle() {
    const [state, dispatch]: [State, any] = useReducer(reducer, {
        selected: [0, 0],
        blocks: dummyBoard,
    });
    return [state, dispatch];
}

export default useSudokuPuzzle;
