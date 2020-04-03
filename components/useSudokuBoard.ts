import { useReducer } from 'react';
import dummyBoard from '../temp/dummyBoard';

function reducer(state, action) {
    switch (action.type) {
        default:
            console.log('UNRECOGNIZED ACTION');
            return state;
    }
}

function useSudokuPuzzle() {
    const [state, dispatch] = useReducer(reducer, dummyBoard);
}

export default useSudokuPuzzle;
