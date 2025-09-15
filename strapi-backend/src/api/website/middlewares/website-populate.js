"use strict";
const populate = {
  populate: {
    header: {
      populate: {
        logo: {
          populate: { image: { fields: ["alternativeText", "url"] } },
        },
        links: "true",
        cta: "true",
      },
    },
    footer: {
      populate: {
        logo: {
          populate: { image: { fields: ["alternativeText", "url"] } },
        },
        links: "true",
        socialLinks: {
          populate: { image: { fields: ["alternativeText", "url"] } },
        },
      },
    },
  },
};
module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    ctx.query.populate = populate.populate;
    console.log("In website-populate middleware");
    await next();
  };
};
