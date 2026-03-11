export default {
  async find(ctx) {
    try {
      const entity = await strapi.entityService.findMany(
        'api::fnb-hardware-solution.fnb-hardware-solution',
        {
          populate: ['hardwareFeatures'],
        }
      );
      return entity;
    } catch (err) {
      ctx.throw(500, err);
    }
  },
};
