import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import albumData from "../data/albums";
import PlayerBar from "./PlayerBar";

const Album = (props) => {
  const albums = albumData.find((album) => {
    return album.slug === props.match.params.slug;
  });
  const [currentSong, setCurrentSong] = useState(albums.songs[0]);
  const handlePrevClick = () => {
    const currentIndex = albums.songs.findIndex((song) => currentSong === song);
    const newIndex = Math.max(0, currentIndex - 1);
    const newSong = albums.songs[newIndex];
    setCurrentSong(newSong);
  };
  const handleNextClick = () => {
    const currentIndex = albums.songs.findIndex((song) => currentSong === song);
    const newIndex = Math.min(albums.songs.length - 1, currentIndex + 1);
    const newSong = albums.songs[newIndex];
    setCurrentSong(newSong);
  };
  return (
    <section id="album-info">
      <img id="album-cover-art" src={albums.albumCover} alt={albums.title} />
      <div className="album-details">
        <h1 id="album-title">{albums.title}</h1>
        <h2 className="artist">{albums.artist}</h2>
        <div id="release-info">{albums.releaseInfo}</div>
      </div>
      <table id="song-list">
        <colgroup>
          <col id="song-number-column" />
          <col id="song-title-column" />
          <col id="song-duration-column" />
        </colgroup>
        <tbody>
          {albums.songs.map((song, index) => (
            <tr
              key={index}
              title={albums.songs.title}
              duration={albums.songs.duration}
            >
              <td>{index + 1 + "."}</td>
              <td>{song.title}</td>
              <td>{song.duration}</td>
              <td>
                <ReactAudioPlayer src={song.audioSrc} controls />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <PlayerBar
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
      />
    </section>
  );
};

export default Album;
