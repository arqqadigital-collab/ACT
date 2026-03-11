export default {
  routes: [
    {
      method: 'GET',
      path: '/media',
      handler: 'media.find',
      config: {
        auth: false,
      },
    },
  ],
};
