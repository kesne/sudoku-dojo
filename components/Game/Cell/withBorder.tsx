import styled from 'styled-components';

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
`;

const withBorder = Component => {
    return props => {
        return (
            <Border>
                <Component {...props} />
            </Border>
        );
    };
};

export default withBorder;
