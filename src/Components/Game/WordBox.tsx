import { IWordSet } from '../../types/game';


function WordBox({wordSet}:{wordSet:IWordSet}) {
    const prohibitedWords = wordSet.prohibited.slice(0,5).map((word,index) =>{
      return <span key={"wrd_" +index} className='text-xl font-semibold   uppercase border-b-2 pb-4 border-gray-400/30 w-full'>{word}</span>
    });

  return (
    <div className='w-[90%] max-w-[300px] max-h-[450px] h-[60%] border-4 border-gray-600/50 rounded-3xl flex flex-col bg-gray-200 '>
        <h1 className='flex justify-center items-center h-[100px] text-3xl py-4 uppercase bg-[#00005C] text-white w-full border-t-20 border-slate-800 rounded-t-[1.3rem] font-extrabold'>{wordSet.word}</h1>
        <div className='flex flex-col justify-center space-y-5 w-full items-center pt-4 px-16 my-auto'>
            {prohibitedWords}
        </div>
        
    </div>
  )
}

export default WordBox