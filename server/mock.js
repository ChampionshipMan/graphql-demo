const girls = [
    {
      id: 1,
      name: 'lucy',
      age: '18',
      size: "D"
    }
  ]
  
  const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];
  
  const blogs = [
    {
      id: "1",
      title: "示例博客标题1",
      content: "示例博客内容1",
      comments: [
        { id: 1, comment: "示例评论1", user: "示例用户1" },
        { id: 2, comment: "示例评论2", user: "示例用户2" },
        { id: 3, comment: "示例评论3", user: "示例用户3" },
      ],
    },
    {
      id: "2",
      title: "示例博客标题2",
      content: "示例博客内容2",
      comments: [],
    },
    {
      id: "3",
      title: "示例博客标题3",
      content: "示例博客内容3",
      comments: [],
    },
];

module.exports = {
    girls: girls,
    blogs: blogs,
    books
}