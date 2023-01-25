// import React, { useState } from "react";
import React from "react"


export const CreateTimer = () => {
    
    let time = 0;

    setInterval(() => {
        time++;
        console.log(time);
      }, 1000);

    return (
        <div>
            <div>
            {time}    
            </div>  
            
            <button type="button" onClick= {setInterval}> Start Game </button>
        </div>
        
    )
    
}




