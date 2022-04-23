import React, {useRef} from "react";


export default function StateList(props) {
    const al = useRef()

    const handleChange = () => {
        console.log(al.current.checked)
    }

    return (
      <div>

        <div class="states">
          Select the states you have visited. <br/> <br/>
        
                <form>
                    <tr>
                        <tl>South</tl>
                        <td><input type="checkbox" name="Alabama" value="yes" ref={al} onChange={handleChange}/>
                        <label for="Alabama">Alabama</label> </td><br/>

                        <td><input type="checkbox" name="Louisiana" value="yes"/>
                        <label for="Louisiana">Louisiana</label></td><br/>

                        <td><input type="checkbox" name="Arkansas" value="yes"/>
                        <label for="Arkansas">Arkansas</label> </td><br/>

                        <td><input type="checkbox" name="Kentucky" value="yes"/>
                        <label for="Kentucky">Kentucky</label></td><br/>

                        <td><input type="checkbox" name="Florida" value="yes"/>
                        <label for="Florida">Florida</label></td><br/>

                        <td><input type="checkbox" name="Georgia" value="yes"/>
                        <label for="Georgia">Georgia</label></td><br/>
                    </tr>
                    
                    <tr>
                        <tl>West</tl>
                        <td><input type="checkbox" name="Hawaii" value="yes"/>
                        <label for="Hawaii">Hawaii</label></td><br/>

                        <td><input type="checkbox" name="Idaho" value="yes"/>
                        <label for="Idaho">Idaho</label></td><br/>

                        <td><input type="checkbox" name="Alaska" value="yes"/>
                        <label for="Alaska">Alaska</label> </td><br/>

                        <td><input type="checkbox" name="Arizona" value="yes"/>
                        <label for="Arizona">Arizona</label> </td><br/>

                        <td><input type="checkbox" name="California" value="yes"/>
                        <label for="California">California</label> </td><br/>

                        <td><input type="checkbox" name="Colorado" value="yes"/>
                        <label for="Colorado">Colorado</label> </td><br/>
                    </tr>

                    <tr>
                        <tl>East</tl>
                        <td><input type="checkbox" name="Maryland" value="yes"/>
                        <label for="Maryland">Maryland</label></td><br/>

                        <td><input type="checkbox" name="Massachusetts" value="yes"/>
                        <label for="Massachusetts">Massachusetts</label></td><br/>

                        <td><input type="checkbox" name="Maine" value="yes"/>
                        <label for="Maine">Maine</label></td><br/>

                        <td><input type="checkbox" name="Connecticut" value="yes"/>
                        <label for="Connecticut">Connecticut</label></td><br/>

                        <td><input type="checkbox" name="Delaware" value="yes"/>
                        <label for="Delaware">Delaware</label></td><br/>
                        
                    </tr>

                    <tr>
                        <tl>Midwest</tl>

                        <td><input type="checkbox" name="Illinois" value="yes"/>
                        <label for="Illinois">Illinois</label></td><br/>

                        <td><input type="checkbox" name="Indiana" value="yes"/>
                        <label for="Indiana">Indiana</label></td><br/>


                        <td><input type="checkbox" name="Iowa" value="yes"/>
                        <label for="Iowa">Iowa</label></td><br/>

                        <td><input type="checkbox" name="Kansas" value="yes"/>
                        <label for="Kansas">Kansas</label></td><br/>
                    </tr>

                    <tr></tr>

                    

                    

                    

                    

                    {/* <input type="checkbox" name="Michigan" value="yes"/>
                    <label for="Michigan">Michigan</label>

                    <input type="checkbox" name="Minnesota" value="yes"/>
                    <label for="Minnesota">Minnesota</label>

                    <input type="checkbox" name="Mississippi" value="yes"/>
                    <label for="Mississippi">Mississippi</label>

                    <input type="checkbox" name="Missouri" value="yes"/>
                    <label for="Missouri">Missouri</label>

                    <input type="checkbox" name="Montana" value="yes"/>
                    <label for="Montana">Montana</label>

                    <input type="checkbox" name="Nebraska" value="yes"/>
                    <label for="Nebraska">Nebraska</label>

                    <input type="checkbox" name="Nevada" value="yes"/>
                    <label for="Nevada">Nevada</label>

                    <input type="checkbox" name="New Hampshire" value="yes"/>
                    <label for="New Hampshire">New Hampshire</label>

                    <input type="checkbox" name="New Jersey" value="yes"/>
                    <label for="New Jersey">New Jersey</label> */}
                </form>
            
        </div>

      </div>

    );
  }