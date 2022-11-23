import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import List from '../containers/List';

const TopArtists = () => {
    const [artists, setArtists] = useState([]);

    // get top artists from api
    useEffect(() => {
        async function getLastSongs() {
            try {
                const { data } = await axios.get('top/artists?limit=10');

                // organize array for component props
                const items = data.items.map((e) => ({
                    img: e.images[0].url,
                    title: e.name,
                    href: e.external_urls.spotify,
                }));

                setArtists(items);
            } catch (err) {
                localStorage.removeItem('token');
                window.location = '/';
            }
        }

        getLastSongs();
    }, []);

    return (
        <S.Wrapper>
            <List items={artists} title='Most played' titleSpan='artists' count={true} />
        </S.Wrapper>
    );
};

export default TopArtists;

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
`;
