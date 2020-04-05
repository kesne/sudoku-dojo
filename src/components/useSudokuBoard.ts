import { useReducer } from 'react';
import dummyBoard from '../lib/dummyBoard';
import reducer from '../lib/reducers';

function useSudokuBoard() {
    return useReducer(reducer, {
        selected: [0, 0],
        blocks: dummyBoard,
    });
}

export default useSudokuBoard;
