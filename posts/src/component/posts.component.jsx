import React, { Component } from "react";
import axios from "axios";
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

class Posts extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    try {
      const { data: posts } = await axios.get(apiUrl);
      this.setState({ posts });
    } catch (error) {
      console.log(error);
    }
  }

  handleCreate = async () => {
    try {
      const post = { title: "Pondit", body: "I like React JS" };

      const { data } = await axios.post(apiUrl, post);

      const posts = [data, ...this.state.posts];
      this.setState({ posts });
    } catch (error) {
      console.log(error);
    }
  };

  handleUpdate = async (postId) => {
    try {
      const post = { title: "Updated the Title" };

      const { data } = await axios.put(`${apiUrl}/${postId}`, post);

      const posts = [...this.state.posts];
      posts.forEach((post) => {
        if (post.id === postId) {
          post.title = data.title;
        }
      });
      this.setState({ posts });
    } catch (error) {
      console.log(error);
    }
  };

  handleDelete = async (postId) => {
    try {
      await axios.delete(`${apiUrl}/${postId}`);

      const posts = [...this.state.posts];
      posts.filter((post) => {
        if (post.id !== postId) return true;
      });
      this.setState({ posts });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <div className="container mt-4">
          <button className="btn btn-primary" onClick={this.handleCreate}>
            Add Post
          </button>
          <table className="table">
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
                  <tr key={post.id}>
                    <th scope="row">{post.id}</th>
                    <td>{post.title}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => this.handleUpdate(post.id)}
                      >
                        Update
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => this > handleDelete(post.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Posts;
