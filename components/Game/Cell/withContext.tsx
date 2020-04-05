import { useContext } from 'react';
import styled from 'styled-components';

import { GameContext } from '../Board';

const Border = styled.div`
    &:nth-child(3n-1) {
        border-left: 1px solid dimgray;
        border-right: 1px solid dimgray;
    }
    &:nth-child(4),
    &:nth-child(5),
    &:nth-child(6) {
        border-top: 1px solid dimgray;
        border-bottom: 1px solid dimgray;
    }
    box-shadow: inset 0px 0px 20px 1px
        rgba(191, 195, 255, ${props => +props.selected});
`;

type OrderedPair = [number, number];
const cellIsSelected = (position: OrderedPair, selected: OrderedPair) => {
    return position[0] === selected[0] && position[1] === selected[1];
};

const withContext = Component => {
    return props => {
        const { selected, dispatch } = useContext(GameContext);

        const position: OrderedPair = [props.row, props.column];
        const setSelected = () => {
            dispatch({
                type: 'SET_SELECTED_CELL',
                selected: position,
            });
        };

        return (
            <Border
                onClick={setSelected}
                selected={cellIsSelected(position, selected)}
            >
                <Component {...props} />
            </Border>
        );
    };
};

export default withContext;
