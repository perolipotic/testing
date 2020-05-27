import React from "react";
import { connect } from "react-redux";

class CommentList extends React.Component {
   renderComments() {
    return this.props.comments.map((comment) => (
      <li key={comment}>{comment}</li>
    ));
  } 
  render() {
    return (
      <div>
      { <ul>{this.renderComments()}</ul> }
    {this.props.comments && <p>{this.props.comments.length}</p>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    comments: state.comments,
  };
}

export default connect(mapStateToProps)(CommentList);
