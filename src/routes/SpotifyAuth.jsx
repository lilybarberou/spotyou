import { useEffect, useState } from 'react';
import styled from 'styled-components';

const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const RESPONSE_TYPE = 'token';
const SCOPES = 'user-read-recently-played user-top-read';
const url = `${AUTH_ENDPOINT}?client_id=${import.meta.env.VITE_CLIENT_ID}&redirect_uri=${
    import.meta.env.VITE_REDIRECT_URI
}&response_type=${RESPONSE_TYPE}&scope=${SCOPES}`;

const SpotifyAuth = ({ children }) => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const hash = window.location.hash;
        let token = window.localStorage.getItem('token');

        if (!token && hash) {
            token = hash
                .substring(1)
                .split('&')
                .find((elem) => elem.startsWith('access_token'))
                .split('=')[1];

            window.location.hash = '';
            window.localStorage.setItem('token', token);
        }

        setToken(token);
    }, []);

    return token ? (
        children
    ) : (
        <S.Wrapper>
            <S.Link href={url}>Login to Spotify</S.Link>
            <span>
                Your credentials will be save on your computer.
                <br />
                No one will know if you listen to Baby Shark.
            </span>
        </S.Wrapper>
    );
};

export default SpotifyAuth;

const S = {};

S.Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 12px;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    padding: 20px 40px;
    background: ${(props) => props.theme.darkgrey};
    color: ${(props) => props.theme.fontgrey};
`;

S.Link = styled.a`
    padding: 8px 20px;
    border: 2px solid #fff;
    border-radius: 5px;
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    color: ${(props) => props.theme.red};
    width: fit-content;
`;
