import React, { useState, useEffect} from "react";
import Squares from './Squares.js'
import Keyboard from './Keyboard.js'
import squaresData from '../utils/squaresData.json'
import dictionary from "../utils/dictionary.json"
import classNamesObj from "../utils/classNames.json"

export default function Home() {
  // State that changes the grids values 
  const [gridLetters, setGridLetters ] = useState(squaresData);
  // State if player has won or not
  const [haveWon, setHaveWon] = useState(false);
  // State that holds the word of the day 
  const [wordToGuess, setWordToGuess] = useState('word');
  // classname state
  const [classNames, setClassNames] = useState(classNamesObj);

  useEffect(() => {
    if(wordToGuess == 'word'){
      randomWordSelector()
    }
  }, [setClassNames, setHaveWon])


  
  function randomWordSelector() {
    let numberOfWords = dictionary.length
    let randomValue = (Math.random() * numberOfWords)
    dictionary.map((word, i)=>{
      if(i == Math.round(randomValue))
      {
        console.log(word)
        return setWordToGuess(word)
      }
    })
  }

  return (
    <div className='mainHome'>
    <div className='title'>Animals Wordle</div>
    {haveWon ? <div className='wonMessage'>YOU WIN!</div> : <div></div> }
    <Squares gridLetters={gridLetters} classNames={classNames} setClassNames={setClassNames} />

    <Keyboard classNames={classNames} setClassNames={setClassNames} gridLetters={gridLetters} setGridLetters={setGridLetters} haveWon={haveWon} setHaveWon={setHaveWon} wordToGuess={wordToGuess} setWordToGuess={setWordToGuess}/>

    </div>
  )
}
