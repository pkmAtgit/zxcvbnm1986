import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lasttName: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    console.log(e.target.id)
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.firstName,
      lastName: this.state.lasttName,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <React.Fragment>
      <div className="container">
      <div className="card card-register mx-auto mt-5">
        <div className="card-header">Register an Account</div>
        <div className="card-body">
          <form noValidate onSubmit={this.onSubmit}>
            <div className="form-group">
              <div className="form-row">
                <div className="col-md-6">
                  <div className="form-label-group">
                    <input
                  onChange={this.onChange}
                  value={this.state.firstName}
                  error={errors.name}
                  id="firstName"
                  type="text" 
                  required="required"
                  className={classnames("form-control", {
                    invalid: errors.name
                  })}
                />
                <label htmlFor="firstName">First Name</label>
                <span className="red-text">{errors.name}</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-label-group">
                  <input
                  onChange={this.onChange}
                  value={this.state.lasttName}
                  error={errors.lasttName}
                  id="lasttName"
                  type="text" 
                  required="required"
                  className={classnames("form-control", {
                    invalid: errors.lasttName
                  })}
                />
                <label htmlFor="lasttName">Last Name</label>
                <span className="red-text">{errors.lasttName}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="form-label-group">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("form-control", {
                    invalid: errors.email
                  })}
                />
                <label htmlFor="email">Email</label>
                <span className="red-text">{errors.email}</span>
              </div>
            </div>
            <div className="form-group">
              <div className="form-row">
                <div className="col-md-6">
                  <div className="form-label-group">
                    <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  required="required"
                  className={classnames("form-control", {
                    invalid: errors.password
                  })}
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">{errors.password}</span>

                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-label-group">
                    <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  className={classnames("form-control", {
                    invalid: errors.password2
                  })}
                />
                <label htmlFor="password2">Confirm Password</label>
                <span className="red-text">{errors.password2}</span>
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Sign up</button>
          </form>
          <div className="text-center">
            <a className="d-block small mt-3" href="login.html">Login Page</a>
            <a className="d-block small" href="forgot-password.html">Forgot Password?</a>
          </div>
        </div>
      </div>
    </div>




      </React.Fragment>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
