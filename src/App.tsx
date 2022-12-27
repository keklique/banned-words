import { useState } from 'react';
import './App.css';
import Turn from './Components/Game/Turn';
// import wordData from './words.json'
import { IWordSet } from './types/game';
import Game from './Components/Game/Game';

function App() {
  // const data: Array<IWordSet> = JSON.parse(JSON.stringify(wordData));
  // const [wordSets, setWordSets]= useState(data);
  return (
    <div className="App flex h-[100vh] justify-center bg-gray-400">
     <div className=' bg-gray-300 h-screen flex-1 max-w-full self-center sm:max-w-sm flex justify-center'>
       <Game/>
     </div>
    </div>
  );
}

export default App;
