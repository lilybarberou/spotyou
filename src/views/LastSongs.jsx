import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import List from '../containers/List';

const LastSongs = () => {
    const [songs, setSongs] = useState([]);

    // get last songs from api
    useEffect(() => {
        async function getLastSongs() {
            try {
                const { data } = await axios.get('player/recently-played?limit=10');

                // organize array for component props
                const items = data.items.map(({ track }) => ({
                    img: track.album.images[0].url,
                    title: track.name,
                    artist: track.artists[0].name,
                    href: track.external_urls.spotify,
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
            <List items={songs} title='Last played' titleSpan='songs' count={false} />
        </S.Wrapper>
    );
};

export default LastSongs;

const S = {};

S.Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
`;
