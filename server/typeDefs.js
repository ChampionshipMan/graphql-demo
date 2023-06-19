const { gql } = require("apollo-server");

const typeDefs = gql`
  type Comment {
    id: ID
    comment: String
    user: String
  }

  type Blog {
    id: ID
    title: String
    content: String
    comments: [Comment]
  }

  type Girl {
    id: ID
    name: String
    age: String
    size: String
  }

  type Book {
    title: String
    author: String
  }

  type Query {
    blogs: [Blog]
    blog(id: ID!): Blog
    girls: [Girl]
    girl(name: String!): Girl
    books: [Book]
  }

  type Mutation {
    addBook(title: String, author: String): Book
  }

`;

module.exports = {
    typeDefs
}