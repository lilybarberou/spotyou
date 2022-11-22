import { useEffect } from 'react';
import Item from '../components/Item';
import styled from 'styled-components';

const List = (props) => {
    const { title, titleSpan, items, count } = props;

    // animate stuff
    const moveAnim = [{ transform: 'translateX(10%)' }, { transform: 'translateX(-100%)' }];
    const moveTiming = {
        duration: 10000,
        iterations: Infinity,
    };

    // when items are loaded add animate on specific titles
    useEffect(() => {
        const elements = document.querySelectorAll('.move');

        for (const e of elements) {
            if (e.clientWidth > 158) e.animate(moveAnim, moveTiming);
        }
    }, [items]);

    return (
        <S.Wrapper>
            <h1>
                {title} <span>{titleSpan}</span>
            </h1>
            <S.Songs>
                {items.map((e, i) => (
                    <Item obj={e} key={i} i={i} count={count} />
                ))}
            </S.Songs>
        </S.Wrapper>
    );
};

export default List;

const S = {};

S.Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;

    & > h1 {
        font-size: 35px;
        color: #fff;
        text-transform: uppercase;

        & > span {
            color: ${(props) => props.theme.red};
        }
    }
`;

S.Songs = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: 50px;
    box-sizing: border-box;
    border-radius: 5px;
    background: ${(props) => props.theme.darkgrey};
    margin-bottom: 40px;
`;
