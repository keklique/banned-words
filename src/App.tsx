import { useState } from 'react';
import './App.css';
import Turn from './Components/Game/Turn';
// import wordData from './words.json'
import { IWordSet } from './types/game';
import Game from './Components/Game/Game';
import { Analytics } from '@vercel/analytics/react';

function App() {
  // const data: Array<IWordSet> = JSON.parse(JSON.stringify(wordData));
  // const [wordSets, setWordSets]= useState(data);
  return (
    <div className="App flex h-[100vh] justify-center bg-[#290544]">
     <div className='font-overlock bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#871fb3]  to-[#5c079d] h-screen flex-1 max-w-full self-center sm:max-w-sm flex justify-center'>
       <Game/>
     </div>
     <Analytics />
    </div>
  );
}

export default App;
