import React from "react";


export const CreateBoard = ({gameState, boardElement}) => {
boardElement.innerHTML = ('board')
for (let i = 0; i < gameState.board.length; i++) {
    console.log('boardcells');
}

};