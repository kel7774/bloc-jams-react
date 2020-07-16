import React, { useState, useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
import albumData from "../data/albums";
import PlayerBar from "./PlayerBar";
import { AlbumInfoSection, TracksDiv } from "../styles/Album";

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

  useEffect(() => {}, []);
  return (
    <AlbumInfoSection id="album-info">
      <img src={albums.albumCover} alt={albums.title} />
      <div className="album-details">
        <h1 id="album-title">{albums.title}</h1>
        <h3 className="artist">{albums.artist}</h3>
        <div id="release-info">{albums.releaseInfo}</div>
      </div>
      {albums.songs.map((song, index) => (
        <TracksDiv key={index} title={albums.songs.title}>
          <div className="number-title">
            <div>{index + 1 + ". "}</div>
            <div>{song.title}</div>
          </div>
          <ReactAudioPlayer src={song.audioSrc} controls />
        </TracksDiv>
      ))}
      <PlayerBar
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
      />
    </AlbumInfoSection>
  );
};

export default Album;
