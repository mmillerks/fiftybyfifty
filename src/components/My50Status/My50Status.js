import React from 'react';
import Progress_bar from '../ProgressBar/ProgressBar';

export default function My50Status(props) {
    
console.log(props)

    return (
    <div className="status">
        <div className="statusSect">
            <p>UNEXPLORED STATES</p>
            <ul>
            {props.visitedStates.map((state) => {
                
                return(
                    <li className="statusItem">
                        {state}
                    </li>
                )
            })}</ul>
        
        </div>
        
        <div className="statusSect">
            <p>EXPLORED STATES</p>
            <ul>{props.visitedStates.map((state) => {
                
                return(
                    <li className="statusItem">
                        {state}
                    </li>
                )
            })} </ul>
        </div>

        
        
        <div className="statusSect">
            <p>PROGRESS</p>
            <Progress_bar> </Progress_bar>
    
        </div>

    </div>
);
  } 




