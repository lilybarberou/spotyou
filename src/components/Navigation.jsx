import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const Navigation = () => {
    const accessToken = localStorage.getItem('token');
    const [user, setUser] = useState({ name: '', img: '' });

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location = '/';
    };

    useEffect(() => {
        async function getUserInfo() {
            try {
                const { data } = await axios.get('https://api.spotify.com/v1/me', {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

                setUser({ name: data.display_name, img: Boolean(data.images.length) && data.images[0].url });
            } catch (err) {
                handleLogout();
            }
        }

        getUserInfo();
    }, []);

    return (
        <S.Wrapper>
            <S.Header to='/'>
                <span>SpotYou</span>
                <span>{user.name}</span>
                {user.img && <img src={user.img} alt='user profile' width='50' height='50' />}
            </S.Header>
            <S.Menu>
                <span>Menu</span>
                <NavLink activeclassname='active' to='/'>
                    Dashboard
                </NavLink>
                <NavLink to='/songs'>Most played songs</NavLink>
                <NavLink to='/artists'>Most played artists</NavLink>
                <NavLink to='/last'>Last played songs</NavLink>
                <NavLink to='/analytics'>Analytics</NavLink>
            </S.Menu>
            <S.Footer>
                <button onClick={handleLogout}>Logout</button>
                <span>
                    v{APP_VERSION}
                    <a href='https://lilybarberou.fr' target='_blank' rel='noopener noreferrer'>
                        Lily B.
                    </a>
                </span>
            </S.Footer>
        </S.Wrapper>
    );
};

export default Navigation;

const S = {};
S.Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background: ${(props) => props.theme.darkgrey};
    padding: 20px 0;
    box-sizing: border-box;
    width: 200px;
    min-width: 200px;
    height: 100%;
    color: #fff;
`;

S.Header = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    padding-bottom: 30px;
    border-bottom: 0.5px solid #333333;
    width: 100%;
    color: #fff;
    text-decoration: none;

    // logo
    & > span:first-child {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 20px;
    }
    // username
    & > span:nth-child(2) {
        color: ${(props) => props.theme.red};
        font-size: 17px;
        font-weight: bold;
        position: relative;
        margin-bottom: 15px;

        &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 1px;
            top: 100%;
            left: 0;
            background: #fff;
            transition: 0.3s;
        }
    }
    & > img {
        object-fit: cover;
        border-radius: 50%;
    }
`;

S.Menu = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;

    & > span {
        text-transform: uppercase;
        color: ${(props) => props.theme.fontgrey};
        font-size: 13px;
        margin-bottom: 15px;
    }
    & > a {
        color: #fff;
        text-decoration: none;
        font-size: 13px;
        border-bottom: 0.5px solid #333333;
        padding-bottom: 15px;
        padding-top: 15px;
        position: relative;
        font-weight: 400;
        transition: 0.3s;

        &:last-child {
            border-bottom: none;
            padding-bottom: 0;
        }
        &:hover,
        &.active {
            color: ${(props) => props.theme.red};
        }
    }
`;

S.Footer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    margin-top: auto;
    padding: 0 20px;
    gap: 10px;

    & > button {
        padding: 0;
        width: fit-content;
        background: none;
        border: none;
        color: #fff;
        font-size: 13px;
        font-family: 'Poppins', sans-serif;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
            color: ${(props) => props.theme.red};
        }
    }
    & > span {
        color: ${(props) => props.theme.fontgrey};
        font-size: 12px;

        & > a {
            margin-left: 10px;
            text-decoration: none;
            color: ${(props) => props.theme.fontgrey};
        }
    }
`;
