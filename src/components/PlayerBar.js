import React, { Component } from 'react';
import './styleplayerbar.css';

class PlayerBar extends Component {
  render() {
    const { handlePrevClick, handleNextClick, formatTime, currentTime, duration, handleSongClick, isPlaying, handleTimeChange, handleVolumeChange, currentVolume, } = this.props
    return (
      <section className="player-bar">
        <section id="buttons">
          <button id="previous" onClick={handlePrevClick}>
            <span className="ion-skip-backward"></span>
          </button>
          <button id="play-pause" onClick={handleSongClick}>
            <span className={isPlaying ? 'ion-pause' : 'ion-play'}></span>
          </button>
          <button id="next" onClick={handleNextClick}>
            <span className="ion-skip-forward"></span>
          </button>
        </section>
        <section id="time-control">
          <div className="current-time">{formatTime(currentTime)}</div>
          <input
            type="range"
            className="seek-bar"
            value={(currentTime / duration) || 0}
            max="1"
            min="0"
            step="0.01"
            onChange={handleTimeChange}
          />
          <div className="total-time">{formatTime(duration)}</div>
        </section>
        <section id="volume-control">
          <div className="current-volume">{currentVolume}</div>
          <input
            type="range"
            className="seek-bar"
            value={currentVolume}
            max="100"
            min="0"
            step="0.01"
            onChange={handleVolumeChange}
          />
        </section>
      </section>
    );
  }
}

export default PlayerBar;
