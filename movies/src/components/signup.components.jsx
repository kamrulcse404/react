import React from "react";
import Input from "../common/input.component";
import Form from "../common/form.component";
import { register } from "../services/http-service";
// import { useNavigate } from "react-router-dom";

class SignUp extends Form {
  state = {
    data: { username: "", firstName: "", lastName: "", password: "" },
    errors: { username: "", firstName: "", lastName: "", password: "" },
  };

  doSubmit = async () => {
    try {
      await register(this.state.data);
      console.log('Register success');
      // go to login page 
      // this.props.history.push('/movies');
    } catch (error) {
      alert(error);
    }
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
              name="firstName"
              id="firstname"
              type="text"
              value={this.state.data.firstName}
              onChange={(e) => this.handleChange(e)}
              errors={this.state.errors}
            />
          </div>
          <div className="mb-3">
            <Input
              label="Last Name"
              name="lastName"
              id="lastname"
              type="text"
              value={this.state.data.lastName}
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
          <button type="submit" className="btn btn-primary">
            Sign-Up
          </button>
        </form>
      </div>
    );
  }
}

export default SignUp;
