"use strict";
const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::website.website", {
  config: {
    find: { middlewares: ["api::website.website-populate"] },
  },
});
("use strict");
