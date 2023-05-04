import React, { Component } from "react";
import Input from "../common/input.component";

class Login extends Component {
  state = {
    user: { username: "", password: "" },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const userName = e.target[0].value;
    const password = e.target[1].value;

    console.log({ userName, password });
  };

  handleChange = e => {
    const name = e.currentTarget.name;
    const value = e.target.value;
    
    const updatedUser = { ...this.state.user }
    updatedUser[name] = value;

    this.setState({ user: updatedUser });
  }

  render() {
    return (
      <div className="container w-50 mx-auto">
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <Input
              label="User Name"
              name="username"
              id="userName"
              type="text"
              value={this.state.user.username}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="mb-3">
            <Input
              label="Password"
              name="password"
              id="password"
              type="password"
              value={this.state.user.password}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="remember" />
            <label className="form-check-label" htmlFor="remember">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
