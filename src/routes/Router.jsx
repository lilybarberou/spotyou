import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../views/Home';
import SpotifyAuth from './SpotifyAuth';
import Navigation from '../components/Navigation';
import LastSongs from '../views/LastSongs';
import styled from 'styled-components';
import TopSongs from '../views/TopSongs';
import TopArtists from '../views/TopArtists';

const Router = () => {
    const routes = [
        { path: '/', element: <Home /> },
        { path: '/songs', element: <TopSongs /> },
        { path: '/artists', element: <TopArtists /> },
        { path: '/last', element: <LastSongs /> },
        { path: '/analytics', element: <Home /> },
    ];

    return (
        <BrowserRouter>
            <SpotifyAuth>
                <Navigation />
                <S.Container>
                    <Routes>
                        {routes.map((e, i) => (
                            <Route key={i} path={e.path} element={e.element} />
                        ))}
                    </Routes>
                </S.Container>
            </SpotifyAuth>
        </BrowserRouter>
    );
};

export default Router;

const S = {};
S.Container = styled.div`
    width: calc(100vw - 200px);
    display: flex;
    justify-content: center;
    overflow-y: scroll;
    padding: 20px 40px;
    box-sizing: border-box;

    &::-webkit-scrollbar {
        width: 7px;
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #fff;
    }

    &::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: transparent;
    }
`;
