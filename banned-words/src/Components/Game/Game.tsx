import React from 'react'
import BottomBar from './BottomBar'
import Topbar from './Topbar'
import WordBox from './WordBox'
import {InGameButtons} from '../../types/game'
function Game() {

    const onTrueButton = () =>
    {
        console.log("True");
    }
    const onFalseButton = () =>
    {
        console.log("False");
    }
    const onPassButton = () =>
    {
        console.log("Pass");
    }

    const inGameButtons:InGameButtons = {onTrueButton:onTrueButton,onFalseButton:onFalseButton,onPassButton:onPassButton};

  return (
    <div className='h-full w-full flex flex-col items-center justify-evenly'>
        <Topbar/>
        <WordBox/>
        <BottomBar inGameButtons = {inGameButtons}/>
    </div>
  )
}

export default Game