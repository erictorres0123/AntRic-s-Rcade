import React, { useState } from "react";


export const CreateTimer = () => {
    const [time, setTime] = useState(0)  

    const timer = (e) = {
        e.preventDefault();
    const counter = () => {
        time++;
    } 
    setInterval(counter, 1000);
};
    return (
        <div>
            <div>
            {time}    
            </div> 
            
            <button type="button" onClick= {timer}> Start Game </button>
        </div>
        
    )

};




