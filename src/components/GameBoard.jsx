import { useState } from "react";

const startingGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({onSelectSquare, turns}) {
  let gameBoard = startingGameBoard;
  for(const turn of turns){
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  // const [gameBoard, setGameBoard] = useState(startingGameBoard);

  // const handleSelectSquare = (rowI, colI) => {
  //   setGameBoard((prevGameBoard) => {
  //     let newBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];
  //     newBoard[rowI][colI] = active;
  //     return newBoard;
  //   });
  //   onSelectSquare();
  // };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowI) => (
        <li key={rowI}>
          <ol>
            {row.map((playerSymbol, colI) => (
              <li key={colI}>
                <button onClick={()=> onSelectSquare(rowI, colI)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
