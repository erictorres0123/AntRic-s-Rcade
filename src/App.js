import { useState } from 'react';
import './App.css';
import { CreateBoard, } from './components/CreateBoard';
import { CreateTimer } from './components/CreateTimer';



// start state of game/shows the current state of the game
function App () {


  
const [gameState, setGameState] = useState({
  players: ["x" , "o"], 
  board: [
    [null], [null], [null],
    [null], [null], [null],
    [null], [null], [null],
  ] 
});

// dom selector for board in html
const boardElement = document.querySelector('#board');
const timerElement = document.querySelector('#timer')

return ( 
  <div> 
    < CreateTimer gameState = {gameState} timerElement = {timerElement} />
    < CreateBoard gameState = {gameState}  boardElement = {boardElement} /> 
  </div>
  )
};



export default App;