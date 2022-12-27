import { useEffect, useState } from 'react'

function Topbar({turnOver}:{turnOver:()=>void}) {
    const TEMP_TURN_DURATION:number = 30;
    const [timeCounter,setTimeCounter] = useState(30);
    useEffect(()=>{
        const interval = setInterval(()=>{
            if(timeCounter!=0)
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
    <div>{timeCounter}</div>
  )
}

export default Topbar