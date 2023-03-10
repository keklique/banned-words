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
    <div className='h-full w-full flex flex-col justify-evenly py-32 items-center space-y-3'>
      <h1 className='uppercase font-extrabold text-white text-6xl'>Banned! <br/> Words</h1>
      <div className='flex flex-col space-y-3'>
        <input ref={firstTeamNameRef}  placeholder='Team #1' className='text-center rounded-sm focus:outline-none'></input>
        <input ref={secondTeamNameRef} placeholder='Team #2' className='text-center rounded-sm focus:outline-none'></input>
        <input type="number"  ref={turnCountRef}  placeholder='Turn (3)' className='text-center rounded-sm focus:outline-none'></input>
        <button onClick={startGame} className='bg-gradient-to-t from-[#cd7b00] to-[#ff9900] px-4 py-2 rounded-md text-gray-200 hover:text-white text-xl uppercase font-extrabold'>Start Game</button>
      </div>
      
      
    </div>
  )
}

export default InitGame