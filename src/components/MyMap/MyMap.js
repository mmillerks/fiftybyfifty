

export default function MyMap(props) {
    return (
    <div>
        {/* <div>
            <ul>{props.exploredStates.map((state) => {
                    
                    return(
                        <li className="statusItem">
                            {state}
                        </li>
                    )
                })} 
            </ul>
        </div> */}


        <div className="MyMap">

            <div id="MyMapTitle">
                <button type="submit">Explored States</button>
                <button type="submit">Yet to Explore</button>
            </div>

            {/* <div>
                <ul>{props.visitedStates.map((state) => {
                    
                    return(
                        <li className="statusItem">
                            {state}
                        </li>
                    )
                })} </ul>
            </div> */}

            <div id="MyMapImg"><img src="https://i.imgur.com/g9FWsKz.png"></img></div>
        </div>
    </div>
    );
  } 



