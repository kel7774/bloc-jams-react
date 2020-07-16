import React, { useState } from "react";
import { Link } from "react-router-dom";
import albumData from "../data/albums";
import { LibrarySection } from "../styles/Library";

const Library = () => {
  const [albums, setAlbums] = useState(albumData);
  return (
    <LibrarySection className="library">
      {albums.map((album, index) => (
        <Link to={`/album/${album.slug}`} key={index}>
          <img src={album.albumCover} alt={album.title} />
          <div className="details">
            <div>{album.title}</div>
            <div>{album.artist}</div>
            <div>Tracks: {album.songs.length}</div>
          </div>
        </Link>
      ))}
    </LibrarySection>
  );
};

export default Library;
