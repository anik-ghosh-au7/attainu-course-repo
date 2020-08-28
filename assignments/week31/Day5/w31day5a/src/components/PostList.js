import React from 'react';
import { Card } from 'semantic-ui-react';
import styled from 'styled-components';

class PostList extends React.Component {
    render() {
        const { posts, onPostSelect } = this.props;
        return (
            <Card.Group centered card="true">
                {
                    posts.map((post, idx) => {
                        return (
                            <Card key={idx}>
                                <Div>
                                    <Card.Content
                                        header={post.title}
                                        meta={`Id: ${post.id}`}
                                        description={post.body}
                                        onClick={() => onPostSelect(post)}
                                    />
                                </Div>
                            </Card>
                        )
                    })
                }
            </Card.Group>
        )
    }
};

const Div = styled.div`
    cursor: pointer;
`

export default PostList