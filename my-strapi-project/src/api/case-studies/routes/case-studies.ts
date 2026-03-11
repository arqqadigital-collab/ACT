export default {
  routes: [
    {
      method: 'GET',
      path: '/case-studies',
      handler: 'case-studies.find',
      config: {
        auth: false,
      },
    },
  ],
};
