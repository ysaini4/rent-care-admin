import React, { Component } from "react";
import { login } from "../services/adminServices";
import jwtDecode from "jwt-decode";
class Login extends Component {
  state = { email: "", password: "" };
  componentDidMount() {
    try {
      const jwt = localStorage.getItem("rc-x-auth-token");
      if (jwt) {
        const user = jwtDecode(jwt);
        this.props.history.replace("/");
      }
    } catch (err) {
      console.log(err);
    }
  }
  handleLogin = async () => {
    try {
      const { email, password } = this.state;
      const res = await login({ email, password });
      if (res.status) {
        this.props.history.replace("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <div className="login-box" style={{ background: "white" }}>
        <div className="login-logo">
          <a href="../../index2.html">
            <b>Rent</b>Care
          </a>
        </div>
        {/* /.login-logo */}
        <div className="login-box-body">
          <p className="login-box-msg">Sign in to start your session</p>
          <form action="../../index2.html" method="post">
            <div className="form-group has-feedback">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="Email"
                value={this.state.email}
                onChange={({ currentTarget: input }) => {
                  this.setState({ email: input.value });
                }}
              />
              <span className="glyphicon glyphicon-envelope form-control-feedback" />
            </div>
            <div className="form-group has-feedback">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="Password"
                value={this.state.password}
                onChange={({ currentTarget: input }) => {
                  this.setState({ password: input.value });
                }}
              />
              <span className="glyphicon glyphicon-lock form-control-feedback" />
            </div>
            <div className="row">
              {/* /.col */}
              <div className="col-xs-4">
                <button
                  type="button"
                  className="btn btn-primary btn-block btn-flat"
                  onClick={this.handleLogin}
                >
                  Sign In
                </button>
              </div>
              {/* /.col */}
            </div>
          </form>
          <br />
        </div>
        {/* /.login-box-body */}
      </div>
    );
  }
}

export default Login;
