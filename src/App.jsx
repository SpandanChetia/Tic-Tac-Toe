import {useState} from 'react';

import Player from './components/Player.jsx'
import GameBoard from './components/GameBoard.jsx'
function App() {
  const [activeP, changeActive] = useState('X');

  const handleSelectSquare = ()=>{
    changeActive((newactive)=> newactive==='X' ? 'O' : 'X');
  }

  return (
    <main>
      <div id="game-container">
          <ol id="players" className="highlight-player">
              <Player name = "Player 1" symbol = "X" active={activeP==="X"}/>
              <Player name = "Player 2" symbol = "O" active={activeP==="O"}/>
          </ol>
          <GameBoard onSelectSquare={handleSelectSquare} active={activeP}/>
      </div>
    </main>
  )
}

export default App
