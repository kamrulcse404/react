import React, { Component } from "react";
import Input from "../common/input.component";
import Form from "../common/form.component";
import { login } from "../services/http-service";

class Login extends Form {
  state = {
    data: { username: "", password: "" },
    errors: { username: "", password: "" },
  };

  doSubmit = async () => {
    const user = { username: this.state.data.username, password: this.state.data.password }
    try {
      await login(user);
      console.log('Login success');
      // go to home or movie route 
    } catch (error) {
      alert(error);
      const errors = { ...this.state.errors };
        errors.username = "Username may be incorrect";
        errors.password = "Password may be incorrect";

        this.setState({ ...this.state, errors });
    }

    // const userName = e.target[0].value;
    // const password = e.target[1].value;
    // const history = useNavigate();

    // if (userName === "admin" && password === "12345") {
    //   history("/movies");
    // } else {
    //   const errors = { ...this.state.errors };
    //   errors.username = "Username may be incorrect";
    //   errors.password = "Password may be incorrect";

    //   this.setState({ ...this.state, errors });
    // }
  };

  // validateInput = (name, value) => {
  //   if (name == "username") {
  //     if (value.trim() === "") return "Username must not be empty";
  //   }

  //   if (name == "password") {
  //     if (value.trim() === "") return "Password must not be empty";
  //   }

  //   return "";
  // };

  // handleChange = (e) => {
  //   const name = e.currentTarget.name;
  //   const value = e.target.value;

  //   const error = this.validateInput(name, value);
  //   const errors = { ...this.state.errors };

  //   errors[name] = error;

  //   const user = { ...this.state.user };
  //   user[name] = value;

  //   this.setState({ user, errors });
  // };

  render() {
    return (
      <div className="container w-50 mx-auto">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="mb-3">
            <Input
              label="User Name"
              name="username"
              id="userName"
              type="text"
              value={this.state.data.username}
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
              value={this.state.data.password}
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
