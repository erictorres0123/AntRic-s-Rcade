// import React, { useState } from "react";
import React from "react"


export const CreateTimer = (gameState) => {
    
    let time = 0;
    const counter = (gameState) => {
        time++;
        console.log(time);
    }

    return (
        <div>
            <div>
            {time}    
            </div>  
            
            <button type="button" onClick= {counter}> Start Game </button>
        </div>
        
    )
    
}




