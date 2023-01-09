import { useEffect, useState } from 'react'
import timer from '../../Assets/timer.svg'
import { ITurn } from '../../types/game';

function Topbar({turnOver,turnInfo}:{turnOver:()=>void,turnInfo:ITurn}) {
    const TEMP_TURN_DURATION:number = 30;
    const [timeCounter,setTimeCounter] = useState(TEMP_TURN_DURATION);
    useEffect(()=>{
        const interval = setInterval(()=>{
            if(timeCounter!==0)
            {
                setTimeCounter(timeCounter -1);
            }else
            {
                turnOver();
            }
        },1000);
        return ()=> clearInterval(interval);
    },[timeCounter]);
  return (
    <div className='flex flex-row items-center w-full justify-evenly'>
        <div className='flex flex-row font-bold text-4xl w-40 justify-evenly'>
            <span className='text-green-500/70'>{turnInfo.trueWords}</span>
            <span className='text-yellow-500/70'>{turnInfo.passWords}</span>
            <span className='text-red-500/70'>{turnInfo.falseWords}</span>
        </div>
        <span className='space-x-6 font-bold text-xl text-gray-600 flex flex-row items-center'>
            {timeCounter}
            <img className='h-8 ml-2 ' src={timer}/>
        </span>
        
    </div>
  )
}

export default Topbar