import styled from 'styled-components';
import withContext from './withContext';

const Container = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${props =>
        props.dark ? 'rgba(0, 0, 0, 0.25)' : 'white'};
`;

const Number = styled.p`
    font-weight: ${props => (props.bold ? 'bolder' : 'normal')};
    margin: 0;
    font-size: 24px;
`;

type Props = {
    isImmutable: boolean;
    currentValue: number;
};
function Big({ isImmutable, currentValue }: Props) {
    return (
        <Container dark={isImmutable}>
            <Number bold={isImmutable}>{currentValue}</Number>
        </Container>
    );
}

export default withContext(Big);
