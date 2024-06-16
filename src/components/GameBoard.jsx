export default function GameBoard({onSelectSquare, board}) {
  return (
    <ol id="game-board">
      {board.map((row, rowI) => (
        <li key={rowI}>
          <ol>
            {row.map((playerSymbol, colI) => (
              <li key={colI}>
                <button onClick={()=> onSelectSquare(rowI, colI)} disabled={playerSymbol!==null}>
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
