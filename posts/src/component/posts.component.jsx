import React, { Component } from "react";
import axios from "axios";

class Posts extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    try {
      const { data: posts } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      this.setState({ posts });
    } catch (error) {
      console.log(error);
    }

    // promise
    //   .then(response => {
    //     // console.log(response);
    //     this.setState({ posts: response.data });
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   })
  }

  render() {
    return (
      <table class="table container">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {this.state.posts.map((post) => {
            return (
              <tr>
                <th scope="row">{post.id}</th>
                <td>{post.title}</td>
                <td>
                  <button className="btn btn-primary">Update</button>
                </td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Posts;
