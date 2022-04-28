import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function HomeCarousel(props) {
    return (
        <div>
            <Carousel>
                <div>
                    <img src="https://i.imgur.com/klg7sai.jpg" />
                    <p className="legend">new adventures await</p>
                </div>
                <div>
                    <img src="https://i.imgur.com/woZM1D9.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://i.imgur.com/2of4VFG.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="https://i.imgur.com/MSa6Idi.jpg"/>
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="https://i.imgur.com/R5qSUVE.jpg"/>
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src="https://i.imgur.com/JMjqk4S.jpg"/>
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>

        </div>
            
    );
  } 