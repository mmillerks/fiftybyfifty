import { useState, useEffect } from "react";
const axios = require('axios').default;



export default function FavoriteList(props) {

// function useFavorite() {
    const[favePlace, setFavePlace] = useState([]);
    // console.log(favePlace);

    useEffect(() => {
      console.log("about to fetch")
        axios.get('http://localhost:3001/api/favoriteLocations')
          .then(function (response) {
            //handle success
            console.log(response);
            setFavePlace(response.data);
          })
          .catch(function (error) {
            //handle error
            console.log(error);
          })
          .then(function () {
            //exceute
          });
        
        }, []
        );


   return (

      <div id="favoriteList">
      
          <div class="card text-center">

            <div>
            
                <div class="card-header">
                  {favePlace.map((fave, i) => {
                              return(

                                <div>
                                
                                    <div class="card-title"> 
                                    {fave.city}, {fave.state}
                                    </div>

                                    <div class="card-body"> 
                                          
                                            <img src="https://i.imgur.com/oHuG2bI.png"></img>
                                            {fave.memories}
                                            <button>DELETE</button>
                                            <button>EDIT</button>
                        
                                    </div>

                                </div>
                              ); 
                            }
                  )
                  }
                </div>
            </div>
          </div>
      </div>
                  );
                    }