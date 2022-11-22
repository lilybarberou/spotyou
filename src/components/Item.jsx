import styled from 'styled-components';

const Item = (props) => {
    const { i, count, obj } = props;
    const { img, title, href, artist } = obj;

    return (
        <S.Item href={href} target='_blank' rel='noopener noreferrer'>
            <img src={img} alt={title} width='200' height='200' />
            <div>
                {count && <span>{i + 1}</span>}
                <div>
                    <span className='move'>{title}</span>
                    <span className='move'>{artist}</span>
                </div>
            </div>
        </S.Item>
    );
};

export default Item;

const S = {};

S.Item = styled.a`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 230px;
    height: 230px;
    font-size: 13px;
    position: relative;

    & > img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        object-fit: cover;
    }
    // blur container
    & > div {
        width: 90%;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        gap: 15px;
        position: absolute;
        bottom: 10px;
        z-index: 10;
        backdrop-filter: blur(10px);
        border-radius: 5px;
        padding: 10px 10px;
        background: #222222bf;

        // number
        & > span {
            color: #fff;
            font-size: 30px;
        }

        // title + artist
        & > div {
            display: flex;
            flex-direction: column;
            overflow: hidden;

            & > span:first-child {
                color: ${(props) => props.theme.red};
                font-size: 17px;
                font-weight: bold;
                white-space: nowrap;
                width: max-content;
            }
            & > span:last-child {
                font-weight: bold;
                color: #fff;
                white-space: nowrap;
                width: max-content;
            }
        }
    }
`;
