export default {
  routes: [
    {
      method: 'GET',
      path: '/fnb-hardware-solution',
      handler: 'fnb-hardware-solution.find',
      config: {
        auth: false,
      },
    },
  ],
};
