import { useState, useEffect } from "react";
const axios = require('axios').default;



export default function FavoriteList() {

// function useFavorite() {
    const[favePlace, setFavePlace] = useState([]);
    console.log(favePlace);

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
          <div>
            {favePlace.map((fave) => {
              <div>
                {fave.place}
              </div>
            } ) }
          </div>
      </div>


    );
}