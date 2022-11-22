import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import List from '../containers/List';

const TopSongs = () => {
    const [songs, setSongs] = useState([]);

    // get top songs from api
    useEffect(() => {
        async function getLastSongs() {
            const url = 'https://api.spotify.com/v1/me/top/tracks?limit=10';
            const accessToken = localStorage.getItem('token');

            try {
                const { data } = await axios.get(url, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

                // organize array for component props
                const items = data.items.map((e) => ({
                    img: e.album.images[0].url,
                    title: e.name,
                    artist: e.artists[0].name,
                    href: e.external_urls.spotify,
                }));

                setSongs(items);
            } catch (err) {
                localStorage.removeItem('token');
                window.location = '/';
            }
        }

        getLastSongs();
    }, []);

    return (
        <S.Wrapper>
            <List items={songs} title='Most played' titleSpan='songs' count={true} />
        </S.Wrapper>
    );
};

export default TopSongs;

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
