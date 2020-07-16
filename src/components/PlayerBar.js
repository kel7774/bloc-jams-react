import React from "react";
import { Button } from "../styles/PlayerBar";

const PlayerBar = ({ handlePrevClick, handleNextClick }) => {
  return (
    <section className="player-bar">
      <section className="buttons">
        <Button id="previous" onClick={handlePrevClick}>
          Prev
        </Button>
        <Button id="next" onClick={handleNextClick}>
          Next
        </Button>
      </section>
    </section>
  );
};

export default PlayerBar;
