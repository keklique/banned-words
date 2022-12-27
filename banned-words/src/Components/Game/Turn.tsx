import { Dispatch, SetStateAction, useState } from 'react'
import BottomBar from './BottomBar'
import Topbar from './Topbar'
import WordBox from './WordBox'
import {InGameButtons, ITurn, IWordSet} from '../../types/game'
function Turn({wordSets,setWordSets,turn,endTurn}:{wordSets:Array<IWordSet>,setWordSets:Dispatch<SetStateAction<IWordSet[]>>,turn:ITurn,endTurn:(turnInfo:ITurn)=>void}) {
    const [wordSetCount,setWordSetCount] = useState(Math.floor(Math.random() * wordSets.length));
    const [turnInfo,setTurnInfo] = useState<ITurn>(turn)
    
    const turnOver = () => 
    {
        endTurn(turnInfo);
    }

    const onTrueButton = () =>
    {
        const tempTurnInfo = turnInfo;
        tempTurnInfo.trueWords ++;
        setTurnInfo(tempTurnInfo);
        giveNewWord();
    }
    const onFalseButton = () =>
    {
        const tempTurnInfo = turnInfo;
        tempTurnInfo.falseWords ++;
        setTurnInfo(tempTurnInfo);
        giveNewWord();
    }
    const onPassButton = () =>
    {
        const tempTurnInfo = turnInfo;
        tempTurnInfo.falseWords ++;
        setTurnInfo(tempTurnInfo);
        giveNewWord();
    }

    const giveNewWord = () => {
        setWordSets(wordSets.filter(wordSet => wordSet !== wordSets[wordSetCount]))
        setWordSetCount(Math.floor(Math.random() * wordSets.length));
    }

    const inGameButtons:InGameButtons = {onTrueButton:onTrueButton,onFalseButton:onFalseButton,onPassButton:onPassButton};

  return (
    <div className='h-full w-full flex flex-col items-center justify-evenly'>
        <Topbar turnOver = {turnOver}/>
        <WordBox wordSet ={wordSets[wordSetCount]}/>
        <BottomBar inGameButtons = {inGameButtons}/>
    </div>
  )
}

export default Turn