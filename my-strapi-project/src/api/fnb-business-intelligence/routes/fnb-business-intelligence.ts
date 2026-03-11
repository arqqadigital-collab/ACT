export default {
  routes: [
    {
      method: 'GET',
      path: '/fnb-business-intelligence',
      handler: 'fnb-business-intelligence.find',
      config: {
        auth: false,
      },
    },
  ],
};
