import produce from 'immer';
import { CellShape } from '../CellShape';

enum ActionType {
    SET_SELECTED_CELL = 'SET_SELECTED_CELL',
    SET_CURRENT_VALUE = 'SET_CURRENT_VALUE',
}
interface Action {
    type: ActionType;
    selected?: [number, number];
}

interface State {
    blocks: CellShape[][];
    selected: [number, number]
}

const reducer = produce((draft: State, action: Action) => {
    switch (action.type) {
        case ActionType.SET_SELECTED_CELL:
            draft.selected = action.selected;
            return;
    }
});

export default reducer;
