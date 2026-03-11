export default {
  routes: [
    {
      method: 'GET',
      path: '/fnb-success-stories',
      handler: 'fnb-success-stories.find',
      config: {
        auth: false,
      },
    },
  ],
};
