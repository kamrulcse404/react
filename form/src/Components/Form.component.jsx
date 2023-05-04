import React, { Component } from "react";

class Form extends Component {
  state = {};
  render() {
    return (
      <>
        <div class="w-75 p-3">
          <div>
            <form>
              <div class="mb-3">
                <label for="email" class="form-label">
                  Email address
                </label>
                <input type="email" class="form-control" id="email" />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">
                  Password
                </label>
                <input type="password" class="form-control" id="password" />
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
export default Form;
