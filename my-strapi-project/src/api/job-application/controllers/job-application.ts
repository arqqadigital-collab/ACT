/**
 * job-application controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::job-application.job-application', ({ strapi }) => ({
  async create(ctx) {
    try {
      const { data, files } = ctx.request.body;
      
      // Parse the data if it's still stringified
      const parsedData = typeof data === 'string' ? JSON.parse(data) : data;
      
      // Create the job application entry
      const entry = await strapi.entityService.create('api::job-application.job-application', {
        data: parsedData,
        files: files,
      });

      // Return the created entry with populated relations
      const sanitizedEntry = await this.sanitizeOutput(entry, ctx);
      
      return this.transformResponse(sanitizedEntry);
    } catch (error) {
      console.error('Error creating job application:', error);
      ctx.throw(500, error);
    }
  },
}));
