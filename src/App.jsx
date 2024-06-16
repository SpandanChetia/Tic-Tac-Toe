import {useState} from 'react';

import Player from './components/Player.jsx'
import GameBoard from './components/GameBoard.jsx'
import Log from './components/Log.jsx'

function App() {
  const [activeP, changeActive] = useState('X');
  const [gameTurn, changeGameT] = useState([]);

  const handleSelectSquare = (rowI, colI)=>{
    changeActive((newactive)=> newactive==='X' ? 'O' : 'X');

    changeGameT(prevTurns=>{
      let currentP = 'X';

      if(prevTurns.length>0 && prevTurns[0].player === 'X'){
        currentP = 'O';
      }
      const updatedTurns = [
        { square : { row : rowI, col : colI}, player : currentP },
         ...prevTurns
      ];
      
      return updatedTurns;
    });
    
  }

  return (
    <main>
      <div id="game-container">
          <ol id="players" className="highlight-player">
              <Player name = "Player 1" symbol = "X" active={activeP==="X"}/>
              <Player name = "Player 2" symbol = "O" active={activeP==="O"}/>
          </ol>
          <GameBoard onSelectSquare={handleSelectSquare}
          turns = {gameTurn}/>
      </div>
      <Log/>
    </main>
  )
}

export default App
