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
            <span className='text-[#06FF00] font-extrabold'>{turnInfo.trueWords}</span>
            <span className='text-[#FFE400] font-extrabold'>{turnInfo.passWords}</span>
            <span className='text-[#FF1700] font-extrabold'>{turnInfo.falseWords}</span>
        </div>
        <span className='space-x-6 font-extrabold text-3xl text-white flex flex-row items-center'>
            {timeCounter}
            <img className='h-8 ml-2 ' src={timer}/>
        </span>
        
    </div>
  )
}

export default Topbar