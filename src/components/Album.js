import React, { Component } from 'react';
import albumData from './../data/albums';

class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find(album => {
      return album.slug === this.props.match.params.slug
    });

    this.state = {
      album: album,
      currentSong: album.songs[0],
      isPlaying: false,
      isHovered: null
    };

    this.audioElement = document.createElement('audio');
    this.audioElement.src = album.songs[0].audioSrc;
  }

  play() {
    this.audioElement.play();
    this.setState({ isPlaying: true });
  }

  pause() {
    this.audioElement.pause();
    this.setState({ isPlaying: false });
  }

  setSong(song) {
    this.audioElement.src = song.audioSrc;
    this.setState({ currentSong: song });
  }

  handleSongClick(song) {
    const isSameSong = this.state.currentSong === song;
    if (this.state.isPlaying && isSameSong) {
      this.pause();
    } else {
      if (!isSameSong) { this.setSong(song); }
      this.play();
    }
  }

  handleSongHover(song) {

  }

  handleIcon(song) {
    if(this.state.currentSong === song && this.state.isPlaying) {
      return <span className="ion ion-pause"></span>
    } else if (this.state.currentSong === song && !this.state.isPlaying) {
      return <span className="ion ion-play"></span>
    }
  }



  render () {
    return (
      <section className="album">
        <section id="album-info">
          <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title} />
          <div className="album-details">
            <h1 id="album-title">{this.state.album.title}</h1>
            <h2 className="artist">{this.state.album.artist}</h2>
            <div id="release-info">{this.state.album.releaseInfo}</div>
          </div>
        </section>
      <table id="song-list">
        <colgroup>
          <col id="song-number-column" />
          <col id="song-title-column" />
          <col id="song-duration-column" />
        </colgroup>
        <tbody>
          {this.state.album.songs.map( ( song, index) =>
          <tr className="song" key = {index} title ={this.state.album.songs.title} duration={this.state.album.songs.duration} onClick= { () => this.handleSongClick(song)}>
            <td className="song-index" onMouseEnter={ () => this.handleSongHover(song)} onMouseLeave={ () => this.handleSongHover(null)}>
              <span className="playButton">{index + 1 + '. '}</span>
                {this.handleIcon(song)}
            </td>
            <td>
              { song.title }
            </td>
            <td>
              { song.duration }
            </td>
          </tr>
        )}

        </tbody>
      </table>
      </section>
    );
  }
}

export default Album;
