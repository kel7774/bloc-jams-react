import React, { useState } from "react";
import { Link } from "react-router-dom";
import albumData from "../data/albums";

const Library = () => {
  const [albums, setAlbums] = useState(albumData);
  return (
    <section className="library">
      {albums.map((album, index) => (
        <Link to={`/album/${album.slug}`} key={index}>
          <img src={album.albumCover} alt={album.title} />
          <div>{album.title}</div>
          <div>{album.artist}</div>
          <div>{album.songs.length}</div>
        </Link>
      ))}
    </section>
  );
};

export default Library;
