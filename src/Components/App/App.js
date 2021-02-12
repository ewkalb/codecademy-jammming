import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import react from 'react';
import TrackList from '../TrackList/TrackList';


class App extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults:[
      {name: 'name1', artist: 'artists1', album: 'album1', id: 1},
      {name: 'name2', artist: 'artists2', album: 'album2', id: 2},
      {name: 'name3', artist: 'artists3', album: 'album3', id: 3},
    ],
      playlistName: 'My Playlist',
      playlistTracks: [
        {name: 'PlaylistName1', artist: 'PlaylistArtists1', album: 'PlayListsAlbum1', id: 4},
        {name: 'PlaylistName2', artist: 'PlaylistArtists2', album: 'PlayListsAlbum2', id: 5},
        {name: 'PlaylistName3', artist: 'PlaylistArtists3', album: 'PlayListsAlbum3', id: 6},
      ]
    }

    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } 
    tracks.push(track)
    this.setState({playlistTracks: tracks})
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id)

    this.setState({playlistTracks: tracks})
  }

  render() {
  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
          <Playlist playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack}/>
          </div>
        </div>
    </div>
  );}
}

export default App;
