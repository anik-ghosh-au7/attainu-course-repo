import React, { Component } from "react";
import PostList from "../components/PostList";
import PostItem from "../components/PostItem";
import { Container, Loader } from "semantic-ui-react";
import styled from "styled-components";
import { connect } from "react-redux";
import { SELECT_POST, BACK_TO_POST } from "../redux/reducers/postReducer";
import { populatePost } from "../redux/actions";

class Post extends Component {
  componentDidMount() {
    this.props.populate();
  }

  onPostSelect = (post) => {
    this.props.selectPost(post);
  };

  onReturn = () => {
    this.props.backToPost();
  };

  render() {
    return this.props.posts.isLoading ? (
      <Loader active inline="centered" size="massive" />
    ) : (
      <Div>
        <Container>
          {this.props.posts.selectedPost ? (
            <PostItem
              post={this.props.posts.selectedPost}
              onReturn={this.onReturn}
            />
          ) : (
            <PostList
              posts={this.props.posts.posts}
              onPostSelect={this.onPostSelect}
            />
          )}
        </Container>
      </Div>
    );
  }
}

const Div = styled.div`
  background-color: black;
`;

const mapStateToProps = (state) => {
  return {
    posts: state.post_data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // didn't have to call populatePost as it was declared a normal function
    // and no arguments were required to pass to it
    populate: () => dispatch(populatePost),
    selectPost: (post) => dispatch({ type: SELECT_POST, payload: post }),
    backToPost: () => dispatch({ type: BACK_TO_POST }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
