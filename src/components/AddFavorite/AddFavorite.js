import React, {useRef} from "react";
import { useState } from "react";
import useCollapse from 'react-collapsed';



export default function AddFavorite(props) {
  
  const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })


    return (
      <div>
        <div id="expandable">
            <button
                {...getToggleProps({
                onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                })}
            >
                {isExpanded ? 'CLOSE -' : 'ADD FAVORITE LOCATION +'}
            </button>
            
            <section {...getCollapseProps()} id="favForm"> 
                <div>
                <label>Place:</label><input name="place" type="text"/><br/>
                <br/>
                <label>City:</label><input name="city" type="text"/><br/>
                      <br/>
                <label>State:</label><input name="state" type="text"/><br/>
                      <br/>
                <label>Memories:</label><input name="memories" type="text"/><br/>
                      <br/>
                <input type="submit"/>
                </div>
              </section>
            </div>
        </div>

    );
  }