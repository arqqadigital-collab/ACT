/**
 * industry controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::industry.industry', ({ strapi }) => ({
  async find(ctx) {
    const entity = await strapi.entityService.findOne('api::industry.industry', 1, {
      populate: {
        industries: {
          populate: {
            cardImage: true,
            heroSection: {
              populate: {
                backgroundImage: true,
              },
            },
            ourExpertise: {
              populate: {
                icon: true,
              },
            },
            technologySolutions: {
              populate: {
                icon: true,
              },
            },
            whyChooseUs: {
              populate: {
                icon: true,
              },
            },
            partners: {
              populate: {
                logo: true,
              },
            },
          },
        },
      },
    });

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },
}));
