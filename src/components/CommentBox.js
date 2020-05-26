import React from "react";

class CommentBox extends React.Component {
  state = {
    comment: "",
  };

  handleCommentChange = (e) => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    //TODO - create actions

    this.setState({ comment: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a comment</h4>
        <textarea
          value={this.state.comment}
          onChange={this.handleCommentChange}
        />
        <div>
          <button>Submit comment</button>
        </div>
      </form>
    );
  }
}

export default CommentBox;
