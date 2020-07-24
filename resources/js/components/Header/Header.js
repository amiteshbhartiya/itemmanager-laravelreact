import React from 'react'

function Header(){
    return(
        /*
        <div  class="card-header">
            <ul class="nav justify-content-end">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About Us</a>
                </li>
            </ul>
        </div>
        */
       
    <header>
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a className="navbar-brand" href="#">Company Logo</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
          
          </li>
        </ul>
        <ul className="nav navbar-nav  justify-content-end">
              <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="#">About Us <span className="sr-only"></span></a>
              </li>
          </ul>
      </div>
    </nav>
  </header>
   );
}

export default Header

/*if (document.getElementById('header')) { alert('hello')
    ReactDOM.render(<Header/>, document.getElementById('header'));
}*/
