import {useState} from 'react';

export default function Player({name, symbol}){
    const [currname, handleNamechange] = useState(name);
    const [flag, setStatus] = useState(true);

    const playerEntry = ()=>{
        setStatus((newFlag) => !newFlag);
    }

    const nameChange = (event)=>{
        handleNamechange(event.target.value);
    }
    
    let status;
    let tabContent;
    if(flag){
        status = "Edit";
        tabContent = <span className="player-name">{currname}</span>;
    }else{
        status = "Save";
        tabContent = <input type="text" required value={currname} onChange ={nameChange}></input>;
    }

    return(
        <>
        <li>
            <span className = "player">
                {tabContent}
                <span className = "player-symbol">{symbol}</span>
            </span>
            <button onClick = {playerEntry}>{status}</button>
        </li>
        </>
    );
}