import React from 'react';
import Progress_bar from '../ProgressBar/ProgressBar';

export default function My50Status(props) {
    
console.log(props)

    return (
    <div className="status">
        <div className="statusSect">
            Unexplored States
            <ul>
            {props.exploredStates.map((state) => {
                
                return(
                    <li className="statusItem">
                        {state}
                    </li>
                )
            })}</ul>
        
        </div>
        
        <div className="statusSect">
            Explored States
            <ul>{props.exploredStates.map((state) => {
                
                return(
                    <li className="statusItem">
                        {state}
                    </li>
                )
            })} </ul>
        </div>

        
        
        <div className="statusSect">Progress
            <Progress_bar> </Progress_bar>
    
        </div>

    </div>
);
  } 




