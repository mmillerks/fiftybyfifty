export default function FeaturedLocation(props) {
    return (
    <div>
        <div>
        <img src="https://i.imgur.com/UUH2kYm.png?1" title="source: imgur.com" width="300px" />
        </div>

        <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>

            <div class="carousel-inner">
                <div class="item active">
                <img src="https://i.imgur.com/d6Imyua.jpg" title="source: imgur.com"  height="500px" />                <div class="carousel-caption">
                    <h3>San Francisco</h3>
                    <p>Golden Gate is always so much fun!</p>
                </div>
                </div>

                
            </div>

            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right"></span>
                <span class="sr-only">Next</span>
            </a>
</div>






    </div>
    );
  } 