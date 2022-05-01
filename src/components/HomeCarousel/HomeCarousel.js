import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function HomeCarousel(props) {
    return (
        <div>
            <Carousel>
                <div>
                    <img src="https://i.imgur.com/7uoAofQ.png" />
                </div>
                <div>
                    <img src="https://i.imgur.com/r4dhJbA.png" />
                </div>
                <div>
                    <img src="https://i.imgur.com/2EA1CHP.png" />
                </div>
                {/* <div>
                    <img src="https://i.imgur.com/bGmKr6f.png"/>
                </div> */}
                {/* <div>
                    <img src="https://i.imgur.com/R5qSUVE.jpg"/>
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src="https://i.imgur.com/JMjqk4S.jpg"/>
                    <p className="legend">Legend 6</p> */}
                {/* </div> */}
            </Carousel>

        </div>
            
    );
  } 