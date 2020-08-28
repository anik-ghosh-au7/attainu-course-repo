/* eslint-disable max-len */

import React from "react";
import { Comment, Header, Button, Loader } from "semantic-ui-react";
import styled from "styled-components";
import { connect } from "react-redux";
import { populateComment } from "../redux/actions";
import { CLEAR_COMMENTS } from "../redux/reducers/commentReducer";

class PostItem extends React.Component {
  componentDidMount() {
    this.props.clearComments();
    const { id } = this.props.post;
    this.props.populate(id);
  }

  render() {
    const { onReturn } = this.props;
    return this.props.comments.isLoading ? (
      <Loader active inline="centered" size="massive" />
    ) : (
      <Div>
        <Comment.Group>
          <Header as="h3" dividing>
            {`Comments for Post Id : ${this.props.post.id}`}
          </Header>
          {this.props.comments.comments.map((comment, idx) => {
            return (
              <Comment key={idx}>
                <Comment.Avatar src="default_image.png" />
                <Comment.Content>
                  <Comment.Author as="a">{comment.name}</Comment.Author>
                  <Comment.Metadata>
                    <div>{comment.email}</div>
                  </Comment.Metadata>
                  <Comment.Text>{comment.body}</Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>
            );
          })}
          <Button
            content="Return"
            labelPosition="left"
            icon="left arrow"
            primary
            onClick={onReturn}
          />
        </Comment.Group>
      </Div>
    );
  }
}

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const mapStateToProps = (state) => {
  return {
    comments: state.comment_data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // have to call populateComment(id) as it was a nested higher order function
    // and have to pass id to it for the particular post
    populate: (id) => dispatch(populateComment(id)),
    clearComments: () => dispatch({ type: CLEAR_COMMENTS }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);
