import React,{useRef} from 'react'

function InitGame({initGame}:{initGame:(firstTeamName:string,SecondTeamName:string,turnCount:number) => void}) {
  const firstTeamNameRef = useRef<HTMLInputElement>(null);
  const secondTeamNameRef = useRef<HTMLInputElement>(null);
  const turnCountRef = useRef<HTMLInputElement>(null);

  const startGame = () =>
  {
    const firstTeamName = firstTeamNameRef.current ? firstTeamNameRef.current.value:"Team 1";
    const secondTeamName = secondTeamNameRef.current ? secondTeamNameRef.current.value:"Team 2";
    let turnCount = 3
    try{
      if(turnCountRef.current?.value) turnCount = parseInt(turnCountRef.current?.value);
    }catch(err)
    {
      console.log(err)
    }
    initGame(firstTeamName!=""?firstTeamName:"Team 1",secondTeamName!=""?secondTeamName:"Team 2",turnCount);
  }
  return (
    <div className='h-full w-full flex flex-col justify-center items-center space-y-2'>
      <input ref={firstTeamNameRef}  placeholder='Team #1' className='text-center rounded-md focus:outline-none'></input>
      <input ref={secondTeamNameRef} placeholder='Team #2' className='text-center rounded-md focus:outline-none'></input>
      <input type="number"  ref={turnCountRef}  placeholder='Turn (3)' className='text-center rounded-md focus:outline-none'></input>
      <button onClick={startGame} className='outline px-2 py-1 rounded-sm bg-gray-700/70 text-white outline-gray-500'>Start Game</button>
    </div>
  )
}

export default InitGame