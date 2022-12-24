import React from 'react'

function WordBox() {

    const prohibited:Array<string> = ["maple", "ontario", "nations", "territories", "provinces", "vancouver", "toronto", "french", "quebec"];
    const prohibitedWords = prohibited.splice(0,5).map(word =>{
        return <span className='text-xl uppercase border-b-2 pb-4 border-gray-400/30 w-full'>{word}</span>
    });
  return (
    <div className='w-[90%] h-[60%] border-4 border-gray-600/50 rounded-3xl flex flex-col '>
        <h1 className='text-3xl py-4 uppercase font-bold bg-slate-900 text-gray-200 w-full rounded-t-3xl'>Canada</h1>
        <div className='flex flex-col justify-center space-y-6 w-full items-center px-12 my-auto'>
            {prohibitedWords}
        </div>
        
    </div>
  )
}

export default WordBox