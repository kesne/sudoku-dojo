import produce from 'immer';

enum ActionType {
    SET_SELECTED_CELL = 'SET_SELECTED_CELL',
    SET_CURRENT_VALUE = 'SET_CURRENT_VALUE',
}
interface Action {
    type: ActionType;
    selected?: [number, number, number];
}

const reducer = produce((draft: any, action: Action) => {
    switch (action.type) {
        case ActionType.SET_SELECTED_CELL:
            draft.selected = action.selected;
            return;
    }
});

export default reducer;
