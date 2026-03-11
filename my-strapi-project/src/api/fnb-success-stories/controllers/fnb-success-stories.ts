export default {
  async find(ctx) {
    try {
      const entity = await strapi.entityService.findMany(
        'api::fnb-success-stories.fnb-success-stories',
        {
          populate: {
            successStories: {
              populate: ['image'],
            },
          },
        }
      );
      return entity;
    } catch (err) {
      ctx.throw(500, err);
    }
  },
};
