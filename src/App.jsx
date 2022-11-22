import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Router from './routes/Router';

const theme = {
    red: '#E85656',
    darkgrey: '#202020',
    fontgrey: '#8B8B8B',
};

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Router />
        </ThemeProvider>
    );
};

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    background: #000;
    padding: 0;
    margin: 0;
    height: 100vh;
    /* font-family: 'Poppins', sans-serif; */
    font-family: 'Poppins';

    #root {
      display: flex;
      height: 100%;
    }
  }
`;
