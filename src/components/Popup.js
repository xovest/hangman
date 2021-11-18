import React, { useEffect } from 'react';
import { checkWin } from '../helpers/Helpers';

const Popup = ({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain }) => {
  let finalMessage = '';
  let revealWord = '';
  let playable = true;

  if (checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
    finalMessage = 'Yo gj douche, ya won!1 😃';
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === 'lose') {
    finalMessage = 'Dahell ya lost.. 💩';
    revealWord = `... couldn't u think of ${selectedWord}?`;
    playable = false;
  }

  useEffect(() => setPlayable(playable));

  return (
    <div className="popup-container" style={finalMessage !== '' ? { display: 'flex' } : {}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{revealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
}

export default Popup;
