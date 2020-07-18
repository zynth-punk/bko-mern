import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getPostsQuery = gql`
    {
        posts{
            id
            title
            content
            date
        }
    }
`

class PostBlock extends Component {
    displayPosts(){
        var data = this.props.data;
        if(data.loading) {
            return( <div> Loading books... </div> )
        } else {
            return data.posts.map(post => {
                return(
                <div>
                    <h1>{post.title}</h1>
                    <h3>{post.date}</h3>
                    <p>{post.content}</p>
                </div>
                )
            })
        }
    }
    render() {
        return (
            
                <div>
                    <div id="Post-list">
                        {
                            this.displayPosts()
                        }
                    </div>
                </div>
        );
    }
}

export default graphql(getPostsQuery)(PostBlock);