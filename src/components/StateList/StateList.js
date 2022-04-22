import React from "react";

export default function StateList(props) {
    return (
      <div>

          <div class="states">
          Select the states you have visited. <br/>

             <input type="checkbox" name="Alabama" value="yes"/>
             <label for="Alabama">Alabama</label>
              
             <input type="checkbox" name="Alaska" value="yes"/>
             <label for="Alaska">Alaska</label>

              
             <input type="checkbox" name="Arizona" value="yes"/>
             <label for="Arizona">Arizona</label>

             <input type="checkbox" name="Arkansas" value="yes"/>
             <label for="Arkansas">Arkansas</label>

             <input type="checkbox" name="California" value="yes"/>
             <label for="California">California</label>

             <input type="checkbox" name="Colorado" value="yes"/>
             <label for="Colorado">Colorado</label>

             <input type="checkbox" name="Connecticut" value="yes"/>
             <label for="Connecticut">Connecticut</label>

             <input type="checkbox" name="Delaware" value="yes"/>
             <label for="Delaware">Delaware</label>
            
          </div>



      </div>

    );
  }