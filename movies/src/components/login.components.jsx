import React, { Component } from "react";
import Input from "../common/input.component";
import { useNavigate } from "react-router-dom";

class Login extends Component {
  state = {
    user: { username: "", password: "" },
    errors: { username: "", password: "" },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const userName = e.target[0].value;
    const password = e.target[1].value;
    const history = useNavigate();

    if (userName === "admin" && password === "12345") {
      history("/movies");
    } else {
      const errors = { ...this.state.errors };
      errors.username = "Username may be incorrect";
      errors.password = "Password may be incorrect";

      this.setState({ ...this.state, errors });
    }
  };

  validateInput = (name, value) => {
    if (name == "username") {
      if (value.trim() === "") return "Username must not be empty";
    }

    if (name == "password") {
      if (value.trim() === "") return "Password must not be empty";
    }

    return "";
  };

  handleChange = (e) => {
    const name = e.currentTarget.name;
    const value = e.target.value;

    const error = this.validateInput(name, value);
    const errors = { ...this.state.errors };

    errors[name] = error;

    const user = { ...this.state.user };
    user[name] = value;

    this.setState({ user, errors });
  };

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
              errors={this.state.errors}
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
              errors={this.state.errors}
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
