import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function HomeCarousel(props) {
    return (
        <div>
            <Carousel>
                <div>
                    <img src="https://i.imgur.com/klg7sai.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://i.imgur.com/udsMOM4.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://i.imgur.com/YR5sByv.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>

        </div>
            
    );
  } 