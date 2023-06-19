const { ApolloServer } = require("apollo-server");
const { girls, blogs, books } = require("./mock")
const { typeDefs } = require("./typeDefs")

const resolvers = {
  Query: {
    // blogs 的数据来源
    blogs: () => blogs,
    // 带参数的 blog 的参数处理和数据来源
    blog: (parent, args) => {
      return blogs.find((blog) => blog.id === args.id);
    },

    girls: () => girls,
    girl:(parent, args) => {
      console.log(parent, args);
      return girls.find((girl) => girl.name === args.name);
    },

    books: () => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
