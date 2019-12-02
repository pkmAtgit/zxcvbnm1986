import React from 'react';
import {Link} from 'react-router-dom';
export default function Header() {
    return(
        <nav className="navbar navbar-expand navbar-dark bg-dark static-top" style={{"justifyContent":"spaceBetween"}}>

            <Link className="navbar-brand mr-1" to="/">findMyShop</Link>


                <ul className="navbar-nav float-right">
              { /* <li className="nav-item dropdown no-arrow mx-1">
                    <a className="nav-link dropdown-toggle" href="http://googlw.com" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-bell fa-fw"></i>
                    <span className="badge badge-danger">9+</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="alertsDropdown">
                    <a className="dropdown-item" href="http://googlw.com">Action</a>
                    <a className="dropdown-item" href="http://googlw.com">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="http://googlw.com">Something else here</a>
                    </div>
                </li>
                <li className="nav-item dropdown no-arrow mx-1">
                    <a className="nav-link dropdown-toggle" href="http://googlw.com" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-envelope fa-fw"></i>
                    <span className="badge badge-danger">7</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="messagesDropdown">
                    <a className="dropdown-item" href="http://googlw.com">Action</a>
                    <a className="dropdown-item" href="http://googlw.com">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="http://googlw.com">Something else here</a>
                    </div>
    </li> */ }
                <li className="nav-item dropdown no-arrow">
                    <a className="nav-link dropdown-toggle" href="http://googlw.com" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-user-circle fa-fw"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                    <Link className="dropdown-item" to="/user">User Login</Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="/shopkeeper">Shopkeeper Login</Link>
                    
                    </div>
                </li>
                </ul>               

        </nav>
    );
}