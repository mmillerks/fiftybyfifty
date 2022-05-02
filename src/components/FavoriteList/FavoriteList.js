


export default function FavoriteList(props) {
  const favoriteLocation =this.props.favoriteLocation
  
  return (

      <div id="favoriteList">
        <div className="grid-container">
          {
            favoriteLocation.map((favoriteLocation, i) => (
              <div class="card text-center">
              <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                  
                  <li class="nav-item">
                    <a class="nav-link active" href="#">Active</a>
                  </li>
                  
                  <li class="nav-item">
                    <a class="nav-link" href="#">Edit</a>
                  
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" href="#">Delete</a>
                  </li>
                
                </ul>
              </div>
  
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
              </div>
            ))};

        
        </div>
      </div>

    );
  }
