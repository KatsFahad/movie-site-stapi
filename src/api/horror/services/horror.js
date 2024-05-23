'use strict';

/**
 * horror service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::horror.horror');
