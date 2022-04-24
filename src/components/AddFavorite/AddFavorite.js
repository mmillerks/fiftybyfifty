


export default function AddFavorite(props) {
    return (
      <div>
        
        <button type="button" class="collapsible">Add Favorite Location</button>
             <div class="content">
                    <form>
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
                    </form>
                </div>
      </div>

    );
  }


