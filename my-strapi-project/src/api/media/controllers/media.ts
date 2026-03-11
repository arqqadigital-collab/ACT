import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::media.media', ({ strapi }) => ({
  async find(ctx) {
    try {
      const entity = await strapi.entityService.findOne('api::media.media', 1, {
        populate: {
          mediaItems: {
            populate: {
              thumbnail: true
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
