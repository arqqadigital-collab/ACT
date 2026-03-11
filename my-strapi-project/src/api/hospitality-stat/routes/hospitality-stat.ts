export default {
  routes: [
    {
      method: 'GET',
      path: '/hospitality-stats',
      handler: 'hospitality-stat.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
