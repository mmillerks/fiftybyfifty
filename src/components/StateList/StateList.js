import React, {useRef} from "react";
import { useState } from "react";
import useCollapse from 'react-collapsed';


export default function StateList(props) {
    const al = useRef()
    const ak = useRef()
    const ar = useRef()
    const az = useRef()
    const ca = useRef()
    const co = useRef()
    const ct = useRef()
    const de = useRef()
    const fl = useRef()
    const ga = useRef()
    const hi = useRef()
    const ida = useRef()
    const il = useRef()
    const ind = useRef()
    const ia = useRef()
    const ks = useRef()
    const ky = useRef()
    const la = useRef()
    const me = useRef()
    const my = useRef()
    const mass = useRef()
    const mc = useRef()
    const mic = useRef()
    const min = useRef()
    const mis = useRef()
    const miz = useRef()
    const mon = useRef()
    const ne = useRef()
    const nv = useRef()
    const nh = useRef()
    const nj = useRef()
    const nm = useRef()
    const ny = useRef()
    const nc = useRef()
    const nd = useRef()
    const oh = useRef()
    const ok = useRef()
    const or = useRef()
    const pa = useRef()
    const ri = useRef()
    const sc = useRef()
    const sd = useRef()
    const tn = useRef()
    const tx = useRef()
    const ut = useRef()
    const vt = useRef()
    const va = useRef()
    const wa = useRef()
    const wv = useRef()
    const wi = useRef()
    const wy = useRef()

    const [statesVisited, setStatesVisited] = useState([])

    const refArr = [al, ak, ar, az, ca, co, ct, de, fl, ga, hi, ida, il, ind, ia, ks, ky, 
        la, me, my, mass, mic, min, mis, miz, mon, ne, nv, nh, nj, nm, ny, nc, nd, oh,
        ok, or, pa, ri, sc, sd, tn, tx, ut, vt, va, wa, wv, wi, wy]

    const handleChange = (state) => {
        //console.log(al.current.checked)
        console.log(state)

    // props.onStateExplored(state)

    props.setVisitedStates([...props.visitedStates, state ])

    }
    
    const [isExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })


      
    return (
        <div id="expandable1">
            <button
                {...getToggleProps({
                onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                })}
            >
                {isExpanded ? 'CLOSE -' : 'CLICK TO SELECT STATES VISITED +'}
            </button>
            
            <section {...getCollapseProps()}>
                <div className="expand">
                    <ul>
                            <h3>SOUTH</h3>
                            <input type="checkbox" name="Alabama" value="yes" ref={al} onChange={( ) => handleChange("Alabama")}/>
                            <label for="Alabama">Alabama</label><br/>

                            <input type="checkbox" name="Louisiana" value="yes" ref={la} onChange={( ) => handleChange("Louisianna")}/>
                            <label for="Louisiana">Louisiana</label><br/>

                            <input type="checkbox" name="Arkansas" value="yes" ref={ar} onChange={( ) => handleChange("Arkansas")}/>
                            <label for="Arkansas">Arkansas</label><br/>

                            <input type="checkbox" name="Kentucky" value="yes" ref={ky} onChange={( ) => handleChange("Kentucky")}/>
                            <label for="Kentucky">Kentucky</label><br/>

                            <input type="checkbox" name="Florida" value="yes" ref={fl} onChange={( ) => handleChange("Florida")}/>
                            <label for="Florida">Florida</label><br/>

                            <input type="checkbox" name="Georgia" value="yes" ref={ga} onChange={( ) => handleChange("Georiga")}/>
                            <label for="Georgia">Georgia</label><br/>

                            <input type="checkbox" name="Mississippi" value="yes" ref={mis} onChange={( ) => handleChange("Mississippi")}/>
                            <label for="Mississippi">Mississippi</label><br/>

                            <input type="checkbox" name="North Carolina" value="yes" ref={nc} onChange={( ) => handleChange("North Carolina")}/>
                            <label for="North Carolina">North Carolina</label><br/>

                            <input type="checkbox" name="South Carolina" value="yes" ref={sc} onChange={( ) => handleChange("South Carolina")}/>
                            <label for="South Carolina">South Carolina</label><br/>

                            <input type="checkbox" name="Tennessee" value="yes" ref={tn} onChange={( ) => handleChange("Tennessee")}/>
                            <label for="Tennessee">Tennessee</label><br/>

                            <input type="checkbox" name="Virginia" value="yes" ref={va} onChange={( ) => handleChange("Virginia")}/>
                            <label for="Virginia">Virginia</label><br/>

                            <input type="checkbox" name="West Virginia" value="yes" ref={wv} onChange={( ) => handleChange("West Virginia")}/>
                            <label for="West Virginia">West Virginia</label><br/>
                    </ul>

                    <br/>

                    <div>
                        <ul>
                        <h3>WEST</h3>
                            <input type="checkbox" name="Hawaii" value="yes" ref={hi} onChange={( ) => handleChange("Hawaii")}/>
                            <label for="Hawaii">Hawaii</label><br/>

                            <input type="checkbox" name="Idaho" value="yes" ref={ida} onChange={( ) => handleChange("Idaho")}/>
                            <label for="Idaho">Idaho</label><br/>

                            <input type="checkbox" name="Alaska" value="yes" ref={ak} onChange={( ) => handleChange("Alaska")}/>
                            <label for="Alaska">Alaska</label><br/>

                            <input type="checkbox" name="Arizona" value="yes" ref={az} onChange={( ) => handleChange("Arizona")}/>
                            <label for="Arizona">Arizona</label><br/>

                            <input type="checkbox" name="California" value="yes" ref={ca} onChange={( ) => handleChange("California")}/>
                            <label for="California">California</label><br/>

                            <input type="checkbox" name="Colorado" value="yes" ref={co} onChange={( ) => handleChange("Colorado")}/>
                            <label for="Colorado">Colorado</label><br/>

                            <input type="checkbox" name="Montana" value="yes" ref={mon} onChange={( ) => handleChange("Montana")}/>
                            <label for="Montana">Montana</label><br/>

                            <input type="checkbox" name="Nevada" value="yes" ref={nv} onChange={( ) => handleChange("Nevada")}/>
                            <label for="Nevada">Nevada</label><br/>

                            <input type="checkbox" name="New Mexico" value="yes" ref={nv} onChange={( ) => handleChange("New Mexico")}/>
                            <label for="New Mexico">New Mexico</label><br/>

                            <input type="checkbox" name="Oregon" value="yes" ref={or} onChange={( ) => handleChange("Oregon")}/>
                            <label for="Oregon">Oregon</label><br/>

                            <input type="checkbox" name="Utah" value="yes" ref={ut} onChange={( ) => handleChange("Utah")}/>
                            <label for="Utah">Utah</label><br/>

                            <input type="checkbox" name="Washington" value="yes" ref={wa} onChange={( ) => handleChange("Washington")}/>
                            <label for="Washington">Washington</label><br/>

                            <input type="checkbox" name="Wyoming" value="yes" ref={wy} onChange={( ) => handleChange("Wyoming")}/>
                            <label for="Wyoming">Wyoming</label><br/>
                        </ul>
                    </div>
                    
                    <div>
                        <ul>
                            <h3>EAST</h3>
                            <input type="checkbox" name="Maryland" value="yes" ref={my} onChange={( ) => handleChange("Maryland")}/>
                            <label for="Maryland">Maryland</label><br/>

                            <input type="checkbox" name="Massachusetts" value="yes" ref={mass} onChange={( ) => handleChange("Massachusetts")}/>
                            <label for="Massachusetts">Massachusetts</label><br/>

                            <input type="checkbox" name="Maine" value="yes" ref={me} onChange={( ) => handleChange("Maine")}/>
                            <label for="Maine">Maine</label><br/>

                            <input type="checkbox" name="Connecticut" value="yes" ref={ct} onChange={( ) => handleChange("Connecticut")}/>
                            <label for="Connecticut">Connecticut</label><br/>

                            <input type="checkbox" name="Delaware" value="yes" ref={de} onChange={( ) => handleChange("Delaware")}/>
                            <label for="Delaware">Delaware</label><br/>

                            <input type="checkbox" name="New Hampshire" value="yes" ref={nh} onChange={( ) => handleChange("New Hampshire")}/>
                            <label for="New Hampshire">New Hampshire</label><br/>

                            <input type="checkbox" name="New Jersey" value="yes" ref={nj} onChange={( ) => handleChange("New Jersey")}/>
                            <label for="New Jersey">New Jersey</label><br/>

                            <input type="checkbox" name="New York" value="yes" ref={ny} onChange={( ) => handleChange("New York")}/>
                            <label for="New York">New York</label><br/>

                            <input type="checkbox" name="Pennsylvania" value="yes" ref={pa} onChange={( ) => handleChange("Pennsylvania")}/>
                            <label for="Pennsylvania">Pennsylvania</label><br/>

                            <input type="checkbox" name="Rhode Island" value="yes" ref={ri} onChange={( ) => handleChange("Rhode Island")}/>
                            <label for="Rhode Island">Rhode Island</label><br/>

                            <input type="checkbox" name="Vermont" value="yes" ref={vt} onChange={( ) => handleChange("Vermont")}/>
                            <label for="Vermont">Vermont</label><br/>

                        </ul>
                    </div>

                    <div>
                        <ul>
                        <h3>MIDWEST</h3>
                            <input type="checkbox" name="Illinois" value="yes" ref={il} onChange={( ) => handleChange("Illinois")}/>
                            <label for="Illinois">Illinois</label><br/>

                            <input type="checkbox" name="Indiana" value="yes" ref={ind} onChange={( ) => handleChange("Indiana")}/>
                            <label for="Indiana">Indiana</label><br/>

                            <input type="checkbox" name="Iowa" value="yes" ref={ia} onChange={( ) => handleChange("Iowa")}/>
                            <label for="Iowa">Iowa</label><br/>

                            <input type="checkbox" name="Kansas" value="yes" ref={ks} onChange={( ) => handleChange("Kansas")}/>
                            <label for="Kansas">Kansas</label><br/>

                            <input type="checkbox" name="Michigan" value="yes" ref={mic} onChange={( ) => handleChange("Michigan")}/>
                            <label for="Michigan">Michigan</label><br/>

                            <input type="checkbox" name="Minnesota" value="yes" ref={min} onChange={( ) => handleChange("Minnesota")}/>
                            <label for="Minnesota">Minnesota</label><br/>
                            
                            <input type="checkbox" name="Missouri" value="yes" ref={miz} onChange={( ) => handleChange("Missouri")}/>
                            <label for="Missouri">Missouri</label><br/>

                            <input type="checkbox" name="Nebraska" value="yes" ref={ne} onChange={( ) => handleChange("Nebraska")}/>
                            <label for="Nebraska">Nebraska</label><br/>

                            <input type="checkbox" name="NorthDakota" value="yes" ref={nd} onChange={( ) => handleChange("North Dakota")}/>
                            <label for="North Dakota">North Dakota</label><br/>

                            <input type="checkbox" name="Ohio" value="yes" ref={oh} onChange={( ) => handleChange("Ohio")}/>
                            <label for="Ohio">Ohio</label><br/>

                            <input type="checkbox" name="Oklahoma" value="yes" ref={ok} onChange={( ) => handleChange("Oklahoma")}/>
                            <label for="Oklahoma">Oklahoma</label><br/>

                            <input type="checkbox" name="South Dakota" value="yes" ref={sd} onChange={( ) => handleChange("South Dakota")}/>
                            <label for="South Dakota">South Dakota</label><br/>

                            <input type="checkbox" name="Texas" value="yes" ref={tx} onChange={( ) => handleChange("Texas")}/>
                            <label for="Texas">Texas</label><br/>

                            <input type="checkbox" name="Wisconsin" value="yes" ref={wi} onChange={( ) => handleChange("Wisconsin")}/>
                            <label for="Wisconsin">Wisconsin</label><br/>
                        </ul>
                    </div>


                    
                </div>
                
                
            </section>
         
         </div>
        
    
        );
    }