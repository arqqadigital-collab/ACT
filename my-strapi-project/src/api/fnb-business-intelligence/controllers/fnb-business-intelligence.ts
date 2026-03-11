export default {
  async find(ctx) {
    try {
      const entity = await strapi.entityService.findMany(
        'api::fnb-business-intelligence.fnb-business-intelligence',
        {
          populate: {
            intelligenceFeatures: {
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
