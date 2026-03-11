import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::case-studies.case-studies', ({ strapi }) => ({
  async find(ctx) {
    try {
      const entity = await strapi.entityService.findOne('api::case-studies.case-studies', 1, {
        populate: {
          caseStudies: {
            populate: {
              coverImage: true,
              backgroundImage: true,
              logo: true,
              technologies: true,
              metrics: true
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
