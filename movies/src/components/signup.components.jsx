import React from "react";
import Input from "../common/input.component";
import Form from "../common/form.component";

class SignUp extends Form {
  state = {
    data: { username: "", firstname: "", lastname: '', password: '' },
    errors: { username: "", password: "" },
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
              value={this.state.data.username}
              onChange={(e) => this.handleChange(e)}
              errors={this.state.errors}
            />
          </div>
          <div className="mb-3">
            <Input
              label="First Name"
              name="firstname"
              id="firstname"
              type="text"
              value={this.state.data.firstname}
              onChange={(e) => this.handleChange(e)}
              errors={this.state.errors}
            />
          </div>
          <div className="mb-3">
            <Input
              label="Last Name"
              name="lastname"
              id="lastname"
              type="text"
              value={this.state.data.lastname}
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

export default SignUp;
