const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }
    type Book {
        bookId: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        users: [User]
        user(username: String!): User
        books(username: String): [Book]
        book(bookID: ID!): Book
        me: User
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(bookId: String, authors: [String], description: String, title: String,  image: String, link: String) : User
        removeBook(userId: ID!, BookId: ID!): Book
    }
`
module.exports = typeDefs;
