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
            <div className='h-full w-full flex flex-col justify-center space-y-24 py-10 items-center text-white'>
                <div className='w-full flex flex-row justify-evenly px-2'>
                    {gameInfo.teamNames.map((teamName, index)=>{
                            return <span className='flex flex-col font-extrabold' key={"teams_" + index}>
                                        <h1 className='text-3xl font-semibold'>{teamName}</h1> 
                                        <h2 className='text-3xl'>{ calculateTeamScore(index)}</h2> 
                                    </span>
                    })}
                </div>
                <div className='flex flex-col space-y-4 justify-evenly'>
                    <h1 className='text-3xl font-extrabold'>{gameInfo.teamNames[turnInfo.team]}</h1>
                    <span className='text-[#06FF00] text-xl font-extrabold'> True: {turnInfo.trueWords}  </span>
                    <span className='text-[#FFE400] text-xl font-extrabold'> Pass: {turnInfo.passWords} </span>
                    <span className='text-[#ff4949] text-xl font-extrabold'> False: {turnInfo.falseWords} </span>
                    
                </div>
                <button className=' bg-gradient-to-t from-[#F49D1A] to-[#eeb35a] px-4 py-2 rounded-md text-[#250240] text-xl uppercase font-extrabold w-44 h-12' onClick={nextTurn} > Next Turn</button>
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
            <div className='h-full w-full flex flex-col justify-center items-center space-y-6 text-white'>
                <h1 className='text-5xl font-extrabold text-white'>GAME OVER</h1>
                {gameInfo.teamNames.map((teamName, index)=>{
                   return <div className='flex flex-col'>
                        <h1 className='font-bold text-2xl'>{teamName}</h1>
                        <h2 className='text-xl'>{calculateTeamScore(index)}</h2>
                   </div>
                })}

                <button onClick={restart} className='justify-self-end text-2xl hover:text-yellow-300'>Restart</button>
            </div>
        );
    }
  
    return (
        <div>
            
        </div>
    )
}

export default Game