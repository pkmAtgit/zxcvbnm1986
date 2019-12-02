import React , { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import {Link} from 'react-router-dom';
class Header extends Component {   
    render() {  
        let authenticated = this.props.auth.isAuthenticated
        let logedUser = this.props.auth.user
        let userData = authenticated ? (
        <ul className="navbar-nav float-right">
        <li className="nav-item dropdown no-arrow mx-1">
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
        </li>
        <li className="nav-item dropdown no-arrow text-center">
            <a className="nav-link dropdown-toggle" href="http://googlw.com" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-user-circle fa-fw"></i><br/>
            welcome {logedUser.name}
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                <Link className="dropdown-item" to="/login">
                Login</Link>                    
            </div>
        </li>
        </ul>
        ):(
        <ul className="navbar-nav float-right">
        <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle" href="http://googlw.com" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-user-circle fa-fw"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                <Link className="dropdown-item" to="/login">
                Login</Link>    
                <div class="dropdown-divider"></div>
                <Link className="dropdown-item" to="/register">
                Register</Link>               
            </div>
        </li>
        </ul>
        )
        return(
        <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
        <Link className="navbar-brand mr-1" to="/">
        findMyShop</Link>
        {userData}
        </nav>
    )}
}

Header.propTypes = {
logoutUser: PropTypes.func.isRequired,
auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
auth: state.auth
});
export default connect(
mapStateToProps,
{ logoutUser }
)(Header);