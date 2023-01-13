import React from 'react'
import { InGameButtons } from '../../types/game'

function BottomBar({inGameButtons}:{inGameButtons:InGameButtons}) {
  return (
    <div className='w-full max-w-[450px] flex flex-row justify-evenly'>
        <button onClick={inGameButtons.onTrueButton} className='rounded-2xl bg-gradient-to-t from-[#03a700] to-[#06FF00] text-white w-24 h-14 font-extrabold text-2xl hover:text-3xl'>OK</button>
        <button onClick={inGameButtons.onPassButton} className='rounded-2xl bg-gradient-to-t from-[#9e8f00] to-[#fce300]  text-white w-24 h-14 font-extrabold text-2xl hover:text-3xl'>PASS</button>
        <button onClick={inGameButtons.onFalseButton} className='rounded-2xl bg-gradient-to-t from-[#bb1000] to-[#FF1700]  text-white w-24 h-14 font-extrabold text-2xl hover:text-3xl'>BAN</button>
    </div>
  )
}

export default BottomBar