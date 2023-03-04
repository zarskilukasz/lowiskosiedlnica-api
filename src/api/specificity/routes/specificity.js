'use strict';

/**
 * specificity router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::specificity.specificity');
