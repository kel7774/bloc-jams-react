import React, { useState } from "react";
import albumData from "../data/albums";

const Album = (props) => {
  const albums = albumData.find((album) => {
    return album.slug === props.match.params.slug;
  });
  const [foundAlbum, setFoundAlbum] = useState(albums);
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
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Album;
