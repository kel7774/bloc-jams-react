import styled from "styled-components";

export const AlbumInfoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 10px;
  .album-details {
    text-align: center;
    color: #f5e1eb;
    margin-bottom: 20px;
  }
`;

export const TracksDiv = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #f5e1eb;
  .number-title {
    display: flex;
    flex-direction: row;
  }
  .react-audio-player {
    width: 250px;
    height: 30px;
    margin-bottom: 20px;
  }
  // audio::-webkit-media-controls-panel {
  //   background-color: #1a0925;
  // }
`;
