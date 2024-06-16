export default function GameOver({winner}) {
    let result = null;
    if(winner){
        result = (
            <p>{winner} won!</p>
        )
    }
    else{
        result = (
            <p>It's a Draw!</p>
        )
    }
    return (
        <>
            <div id="game-over">
                <h2>Game Over</h2>
                {result}
                <p>
                    <button>Rematch!</button>
                </p>
            </div>
        </>
    )
}