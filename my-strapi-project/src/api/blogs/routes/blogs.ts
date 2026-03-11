export default {
  routes: [
    {
      method: 'GET',
      path: '/blogs',
      handler: 'blogs.find',
      config: {
        auth: false,
      },
    },
  ],
};
