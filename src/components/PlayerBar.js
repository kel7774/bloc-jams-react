import React from "react";

const PlayerBar = ({ handlePrevClick, handleNextClick }) => {
  return (
    <section className="player-bar">
      <section className="buttons">
        <button id="previous" onClick={handlePrevClick}>
          Prev
        </button>
        <button id="next" onClick={handleNextClick}>
          Next
        </button>
      </section>
    </section>
  );
};

export default PlayerBar;
