import React from 'react';

const Buttons = ({ rangeOfPokemons, previousHandler, nextHandler }) => {
  return (
    <div className="buttons-container">
      {rangeOfPokemons[0] !== 1 && (
        <button className="previousButton" onClick={previousHandler}>
          Previous
        </button>
      )}
      {rangeOfPokemons[1] !== 898 && (
        <button className="nextButton" onClick={nextHandler}>
          Next
        </button>
      )}
    </div>
  );
};

export default Buttons;
