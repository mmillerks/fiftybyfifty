import React, {useRef} from "react";
import { useState } from "react";
import useCollapse from 'react-collapsed';



export default function StateList(props) {
    const al = useRef()

    const handleChange = () => {
        console.log(al.current.checked)
    }
    
    const [isExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
      
    return (
        <div id="expandable">
            <button
                {...getToggleProps({
                onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                })}
            >
                {isExpanded ? 'Collapse' : 'Select States'}
            </button>
            
            <section {...getCollapseProps()}>
                <div>
                    
                    Select the states visited.
                    <ul>
                            <h3>SOUTH</h3>
                            <input type="checkbox" name="Alabama" value="yes" ref={al} onChange={handleChange}/>
                            <label for="Alabama">Alabama</label><br/>

                            <input type="checkbox" name="Alabama" value="yes" ref={al} onChange={handleChange}/>
                            <label for="Alabama">Alabama</label><br/>

                            <input type="checkbox" name="Louisiana" value="yes"/>
                            <label for="Louisiana">Louisiana</label><br/>

                            <input type="checkbox" name="Arkansas" value="yes"/>
                            <label for="Arkansas">Arkansas</label><br/>

                            <input type="checkbox" name="Kentucky" value="yes"/>
                            <label for="Kentucky">Kentucky</label><br/>

                            <input type="checkbox" name="Florida" value="yes"/>
                            <label for="Florida">Florida</label><br/>

                            <input type="checkbox" name="Georgia" value="yes"/>
                            <label for="Georgia">Georgia</label><br/>

                            <input type="checkbox" name="Mississippi" value="yes"/>
                            <label for="Mississippi">Mississippi</label><br/>

                            <input type="checkbox" name="North Carolina" value="yes"/>
                            <label for="North Carolina">North Carolina</label><br/>
                    </ul>

                    <br/>

                    <div>
                        <ul>
                        <h3>WEST</h3>
                            <input type="checkbox" name="Hawaii" value="yes"/>
                            <label for="Hawaii">Hawaii</label><br/>

                            <input type="checkbox" name="Idaho" value="yes"/>
                            <label for="Idaho">Idaho</label><br/>

                            <input type="checkbox" name="Alaska" value="yes"/>
                            <label for="Alaska">Alaska</label><br/>

                            <input type="checkbox" name="Arizona" value="yes"/>
                            <label for="Arizona">Arizona</label><br/>

                            <input type="checkbox" name="California" value="yes"/>
                            <label for="California">California</label><br/>

                            <input type="checkbox" name="Colorado" value="yes"/>
                            <label for="Colorado">Colorado</label><br/>

                            <input type="checkbox" name="Montana" value="yes"/>
                            <label for="Montana">Montana</label><br/>

                            <input type="checkbox" name="Nevada" value="yes"/>
                            <label for="Nevada">Nevada</label><br/>

                            <input type="checkbox" name="New Mexico" value="yes"/>
                            <label for="New Mexico">New Mexico</label><br/>

                            <input type="checkbox" name="Oregon" value="yes"/>
                            <label for="Oregon">Oregon</label><br/>
                        </ul>
                    </div>
                    
                    <div>
                        <ul>
                            <h3>EAST</h3>
                            <input type="checkbox" name="Maryland" value="yes"/>
                            <label for="Maryland">Maryland</label><br/>

                            <input type="checkbox" name="Massachusetts" value="yes"/>
                            <label for="Massachusetts">Massachusetts</label><br/>

                            <input type="checkbox" name="Maine" value="yes"/>
                            <label for="Maine">Maine</label><br/>

                            <input type="checkbox" name="Connecticut" value="yes"/>
                            <label for="Connecticut">Connecticut</label><br/>

                            <input type="checkbox" name="Delaware" value="yes"/>
                            <label for="Delaware">Delaware</label><br/>

                            <input type="checkbox" name="New Hampshire" value="yes"/>
                            <label for="New Hampshire">New Hampshire</label><br/>

                            <input type="checkbox" name="New Jersey" value="yes"/>
                            <label for="New Jersey">New Jersey</label><br/>

                            <input type="checkbox" name="New York" value="yes"/>
                            <label for="New York">New York</label><br/>

                            <input type="checkbox" name="Pennsylvania" value="yes"/>
                            <label for="Pennsylvania">Pennsylvania</label><br/>

                            <input type="checkbox" name="Rhode Island" value="yes"/>
                            <label for="Rhode Island">Rhode Island</label><br/>

                        </ul>
                    </div>

                    <div>
                        <ul>
                        <h3>MIDWEST</h3>
                            <input type="checkbox" name="Illinois" value="yes"/>
                            <label for="Illinois">Illinois</label><br/>

                            <input type="checkbox" name="Indiana" value="yes"/>
                            <label for="Indiana">Indiana</label><br/>

                            <input type="checkbox" name="Iowa" value="yes"/>
                            <label for="Iowa">Iowa</label><br/>

                            <input type="checkbox" name="Kansas" value="yes"/>
                            <label for="Kansas">Kansas</label><br/>

                            <input type="checkbox" name="Michigan" value="yes"/>
                            <label for="Michigan">Michigan</label><br/>

                            <input type="checkbox" name="Minnesota" value="yes"/>
                            <label for="Minnesota">Minnesota</label><br/>
                            
                            <input type="checkbox" name="Missouri" value="yes"/>
                            <label for="Missouri">Missouri</label><br/>

                            <input type="checkbox" name="Nebraska" value="yes"/>
                            <label for="Nebraska">Nebraska</label><br/>

                            <input type="checkbox" name="NorthDakota" value="yes"/>
                            <label for="North Dakota">North Dakota</label><br/>

                            <input type="checkbox" name="Ohio" value="yes"/>
                            <label for="Ohio">Ohio</label><br/>

                            <input type="checkbox" name="Oklahoma" value="yes"/>
                            <label for="Oklahoma">Oklahoma</label><br/>
                        </ul>
                    </div>


                    
                </div>
                
                
            </section>
         
         </div>
        
    
        );
    }