
export interface InGameButtons {
    onTrueButton :  () => void;
    onFalseButton :  () => void;
    onPassButton :  () => void;
  }

export interface IWordSet {
  id:number;
  word:string;
  prohibited:Array<string>;
}

export interface ITurn{
  team:number;
  trueWords:number;
  falseWords:number;
  passWords:number;
}

export interface IGameInfo{
  teamNames:Array<string>
  turnCount:number;
}