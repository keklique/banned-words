import React, { useState } from 'react'
import { IGameInfo, ITurn, IWordSet } from '../../types/game';
import wordData from '../../Assets/words.json'
import InitGame from './InitGame';
import Turn from './Turn';


function Game() {

    const [gameInfo,setGameInfo] = useState<IGameInfo>({teamNames:["Team1","Team2"],turnCount:3})
    const [turns,setTurns] = useState<Array<ITurn>>([])
    enum GameState {
        init,
        turn,
        transition,
        finish
    }
    const data: Array<IWordSet> = JSON.parse(JSON.stringify(wordData));
    const [wordSets, setWordSets] = useState(data);
    const [gameState,setGameState] = useState(GameState.init); 

    const calculateTeamScore = (teamNo:number) =>{
        var score = 0;
        turns.forEach(t => {
            if(t.team === teamNo)
            {
                score += t.trueWords;
                score -= t.falseWords;
            }
        })
        return score;
    }

    const startGame = (firstTeamName:string,secondTeamName:string,turnCount:number) => {
        setGameInfo({teamNames:[firstTeamName,secondTeamName],turnCount:turnCount})
        setGameState(GameState.turn)
    }

    const endTurn = (turnInfo:ITurn) => {
        setTurns([...turns,turnInfo]);
        if(turns.length<=gameInfo.teamNames.length*(gameInfo.turnCount-1))
        {
            setGameState(GameState.transition);
        }
        else{
            setGameState(GameState.finish);
        }
        
    }

    const nextTurn = () => {
        setGameState(GameState.turn);
    }

    const restart = () => {
        setTurns([]);
        setGameState(GameState.init);
    }


    if(gameState === GameState.init) 
    {
        return(<InitGame initGame={startGame}/>);
    }
    
    if(gameState === GameState.turn) 
    {
        var turn:ITurn = {
            team:(turns.length%gameInfo?.teamNames.length),
            trueWords:0,
            falseWords:0,
            passWords:0}
        return(
            <div className='h-full w-full flex flex-col items-center justify-center'>
                {/* <div className='h-14 w-full  bg-white flex flex-row  justify-center items-center'>
                    falan
                </div> */}
                <Turn turn={turn} wordSets={wordSets} setWordSets={setWordSets} endTurn = {endTurn}/>
            </div>
        
        );
    }

    if(gameState === GameState.transition) 
    {
        const turnInfo = turns[turns.length - 1];
        return(
            <div className='h-full w-full flex flex-col justify-evenly py-20 items-center'>
                <div className='w-full flex flex-row justify-evenly px-2'>
                    {gameInfo.teamNames.map((teamName, index)=>{
                            return <span className='flex flex-col'>
                                        <h1 className='text-2xl font-semibold'>{teamName}</h1> 
                                        <h2 className='text-2xl'>{ calculateTeamScore(index)}</h2> 
                                    </span>
                    })}
                </div>
                <div className='flex flex-col space-y-4'>
                    <h1>{gameInfo.teamNames[turnInfo.team]}</h1>
                    <span> True: {turnInfo.trueWords}  </span>
                    <span> Pass: {turnInfo.passWords} </span>
                    <span> False: {turnInfo.falseWords} </span>
                    <button className='border border-green-400 px-4 py-2 rounded-md bg-green-500/80' onClick={nextTurn} > Next Turn</button>
                </div>
                
            </div>
        );
    }

    if(gameState === GameState.finish) 
    {
        const scores:Array<number> = []
        gameInfo.teamNames.map((teamName, index)=>{
            scores.push(calculateTeamScore(index))
    })
        return(
            <div className='h-full w-full flex flex-col justify-center items-center space-y-6'>
                <h1 className='text-4xl font-bold'>GAME OVER</h1>
                {gameInfo.teamNames.map((teamName, index)=>{
                   return <div className='flex flex-col'>
                        <h1 className='font-bold text-2xl'>{teamName}</h1>
                        <h2 className='text-xl'>{calculateTeamScore(index)}</h2>
                   </div>
                })}

                <button onClick={restart} className='justify-self-end'>Restart</button>
            </div>
        );
    }
  
    return (
        <div>
            
        </div>
    )
}

export default Game