import { useState } from 'react';
import './App.css';
import { CreateBoard, } from './components/CreateBoard';



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

return ( <div> < CreateBoard 
  gameState = {gameState} 
  boardElement = {boardElement} 
  /> 
  </div>)
};



export default App;