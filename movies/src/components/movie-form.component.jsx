import React from "react";
import Input from "../common/input.component";
import Form from "../common/form.component";

class MovieForm extends Form {
  state = {
    data: {
      title: '',
      poster: '',
      rating: ''
    },
    errors: {}
  };

  render() {
    return (
      <div className="container w-50 mx-auto">
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <Input
              label="Movie Title"
              name="title"
              id="title"
              type="text"
              value={this.state.data.title}
              onChange={(e) => this.handleChange(e)}
              errors={this.state.errors}
            />
          </div>
          <div className="mb-3">
            <Input
              label="Poster Url"
              name="poster"
              id="poster"
              type="text"
              value={this.state.data.poster}
              onChange={(e) => this.handleChange(e)}
              errors={this.state.errors}
            />
          </div>
          <div className="mb-3">
            <Input
              label="IMDBRating"
              name="rating"
              id="rating"
              type="text"
              value={this.state.data.rating}
              onChange={(e) => this.handleChange(e)}
              errors={this.state.errors}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Movie
          </button>
        </form>
      </div>
    );
  }
}

export default MovieForm;
