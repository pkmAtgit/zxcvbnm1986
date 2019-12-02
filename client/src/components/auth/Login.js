import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (

      <div className="container">
      <div className="card card-login mx-auto mt-5">
        <div className="card-header">Login</div>
        <div className="card-body">
          <form noValidate onSubmit={this.onSubmit}>
            <div className="form-group">
              <div className="form-label-group">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  autoFocus="autoFocus"
                  error={errors.email}
                  id="email"
                  type="email"
                  required="required"
                  className={classnames("form-control", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />
                <label htmlFor="inputEmail">Email address</label>
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>
            </div>
            <div className="form-group">
              <div className="form-label-group">
              <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  required="required"
                  className={classnames("form-control", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>
            </div>
            <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block" href="index.html">Login</button>
            </div>
            
          </form>
          <div className="text-center">
          <Link to="/register">Register an Account</Link>
            <a className="d-block small" href="forgot-password.html">Forgot Password?</a>
          </div>
        </div>
      </div>
    </div>




    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
