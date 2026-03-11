import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::blogs.blogs', ({ strapi }) => ({
  async find(ctx) {
    try {
      const entity = await strapi.entityService.findOne('api::blogs.blogs', 1, {
        populate: {
          blogs: {
            populate: {
              coverImage: true,
              tags: true
            }
          }
        }
      });

      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitizedEntity);
    } catch (err) {
      ctx.throw(500, err);
    }
  }
}));
