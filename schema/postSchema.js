const graphql = require ('graphql');
const _ = require ('lodash');
const Post = require('../models/postsModel')

const {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLList} = graphql;


const BlogType = new GraphQLObjectType({
    name:'post',
    fields: () => ({
        id: {type: GraphQLID},
        title: {type: GraphQLString},
        content: {type: GraphQLString},
        date: {type: GraphQLString}
    })

});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        post:{
            type: BlogType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                //code to get data
                return Post.findbyId(args.id);
            }
        },
        posts: {
            type: new GraphQLList(BlogType),
            resolve(parent, args){
                return posts
            }
        }
    },
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addPost: { 
            type: BlogType,
            args: {
                title: { type: GraphQLString },
                content: { type: GraphQLString},
                date: { type: GraphQLString}
            },
            resolve(parent, args){
                let post = new Post({
                    title: args.title,
                    content: args.content,
                    date: args.date
                });
                return post.save()
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});