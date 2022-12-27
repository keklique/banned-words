import React from 'react'
import { InGameButtons } from '../../types/game'

function BottomBar({inGameButtons}:{inGameButtons:InGameButtons}) {
  return (
    <div className='w-full max-w-[450px] flex flex-row justify-evenly'>
        <button onClick={inGameButtons.onTrueButton} className='rounded-2xl   bg-green-600 text-gray-100/80 w-24 h-14 font-bold text-2xl'>OK</button>
        <button onClick={inGameButtons.onPassButton} className='rounded-2xl  bg-yellow-600 text-gray-100/80 w-24 h-14 font-bold text-2xl'>PASS</button>
        <button onClick={inGameButtons.onFalseButton} className='rounded-2xl   bg-red-600 text-gray-100/80 w-24 h-14 font-bold text-2xl'>BAN</button>
    </div>
  )
}

export default BottomBar