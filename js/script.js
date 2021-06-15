function Navbar() {
    return ( 
      <div class="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-dark">
          <a class="navbar-brand" href="">JAM</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">


              <ul class="navbar-nav ml-auto">

              <form class="form-search">
          <div class="input-group">
          <input class="form-control form-control-md search-input"  size="50" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-md btn-success" type="submit"><i class="fa fa-search"></i></button>
          </div>
          </form>

                  <li class="nav-item">
                      <a class="nav-link active mr-2" href="">Home</a>
                  </li>

                  <li class="nav-item">
                      <a class="nav-link mr-2" href="">Popular</a>
                  </li>

                  <li class="nav-item">
                      <a class="nav-link mr-2" href="">List</a>
                  </li>

                  <li class="nav-item">
                      <a class="nav-link mr-2" href="">Anime</a>
                  </li>

              </ul>
          </div>
      </nav>
  </div>
    )
}

// VARIABLE FOR JSX REACT
var destination = document.getElementById('app');

ReactDOM.render(
// WHAt
<div>
  <Navbar/>
 
  
</div>,
// WHERE
// THIS IS CODE FOR DESTINATION VARIABLE
  destination
);