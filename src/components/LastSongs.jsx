import { useEffect, useState } from 'react';
import axios from 'axios';

const LastSongs = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {

        async function getLastSongs() {
            const url = 'https://api.spotify.com/v1/me/player/recently-played?limit=10';
            const accessToken = localStorage.getItem('token');
            
            const {data} = await axios.get(url, {
                headers: {
                    Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`,
                },
            })

            setSongs(data.items);
        }

        getLastSongs();
    }, [])
    
    const Song = ({img, title, artist}) => {
        return <div>
            <img src={img} alt='title'/>
            <span>{title}</span>
            <span>{artist}</span>
        </div>
    }

    return <div>
        <div>
            {songs.map(({track}, i) => <Song key={i} img={track.album.images[0].url} title={track.name} artist={track.artists[0].name} />)}
        </div>
    </div>

};


export default LastSongs;
