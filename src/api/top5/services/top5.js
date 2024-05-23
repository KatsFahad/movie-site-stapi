'use strict';

/**
 * top5 service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::top5.top5');
