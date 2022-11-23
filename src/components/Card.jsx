import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = ({ reverse = null, title, subtitle = '', link }) => {
    return (
        <S.Card reverse={+reverse} to={link}>
            <div>
                <span>{subtitle}</span>
                <span>{title}</span>
            </div>
        </S.Card>
    );
};

export default Card;

const S = {};
S.Card = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    background: ${(props) => props.theme.darkgrey};
    border-radius: 5px;
    font-size: 13px;
    text-decoration: none;
    padding: 20px;
    min-height: 110px;
    min-width: 210px;
    box-sizing: border-box;
    transition: 0.3s;
    height: fit-content;

    & > div {
        display: flex;
        flex-direction: ${(props) => (props.reverse ? 'column-reverse' : 'column')};
        align-items: ${(props) => (props.reverse ? 'flex-end' : 'center')};
        gap: 5px;

        // subtitle by default
        & > span:first-child {
            color: ${(props) => props.theme.fontgrey};
            text-transform: uppercase;
            font-size: 12px;
        }
        // title by default
        & > span:last-child {
            color: ${(props) => props.theme.red};
            font-size: 28px;
            font-weight: bold;
            position: relative;

            &::after {
                content: '';
                position: absolute;
                width: 0;
                height: 2px;
                top: 90%;
                left: 0;
                background: #fff;
                transition: 0.3s;
            }
        }
    }
    &:hover {
        background: #281717;
        & > div {
            & > span:last-child::after {
                width: 100%;
            }
        }
    }
`;
