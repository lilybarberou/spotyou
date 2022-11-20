import LastSongs from "./components/LastSongs";
import SpotifyAuth from "./components/SpotifyAuth";

const App = () => {
  return <SpotifyAuth>
    <LastSongs/>
  </SpotifyAuth>
}

export default App;