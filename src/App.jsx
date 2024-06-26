import { useState } from "react";

import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import GameOver from "./components/GameOver.jsx";
import { WINNING_COMBINATIONS } from "./winning-combos.js";

const getActivePlayer = (gameTurn) => {
  let currentP = "X";
  if (gameTurn.length > 0 && gameTurn[0].player === "X") {
    currentP = "O";
  }
  return currentP;
};

const PLAYERS = {
  X : 'Player 1',
  Y : 'PLAYER 2'
};

const startingGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [players, changePlayers] = useState(PLAYERS);

  const [gameTurn, changeGameT] = useState([]);
  const activeP = getActivePlayer(gameTurn);

  const getgameBoard = (gameTurn) => {
    let gameBoard = [...startingGameBoard.map((array) => [...array])];
    for (const turn of gameTurn) {
      const { square, player } = turn;
      const { row, col } = square;

      gameBoard[row][col] = player;
    }
    return gameBoard;
  };
  
  const gameBoard = getgameBoard(gameTurn);

  const getWinner = (gameBoard) => {
    let winner = null;
    for (const combo of WINNING_COMBINATIONS) {
      const fc = gameBoard[combo[0].row][combo[0].column];
      const sc = gameBoard[combo[1].row][combo[1].column];
      const tc = gameBoard[combo[2].row][combo[2].column];

      if (fc && fc === sc && fc === tc) {
        winner = players[fc];
      }
    }
    return winner;
  };

  const winner = getWinner(gameBoard);
  const draw = gameTurn.length === 9 && !winner;

  const handleSelectSquare = (rowI, colI) => {
    changeGameT((prevTurns) => {
      const currentP = getActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowI, col: colI }, player: currentP },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  };

  const handleRestart = () => {
    changeGameT([]);
  };

  const handlePlayerNameChange = (symbol, newName) => {
    changePlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={PLAYERS.X}
            symbol="X"
            active={activeP === "X"}
            onChange={handlePlayerNameChange}
          />
          <Player
            name={PLAYERS.Y}
            symbol="O"
            active={activeP === "O"}
            onChange={handlePlayerNameChange}
          />
        </ol>
        {(winner || draw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurn} />
    </main>
  );
}

export default App;
