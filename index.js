module.exports = {
  book: {
    assets: "./assets",
    css: ["plugin.css"],
  },
  blocks: {
    admonition: {
      process: async function (block) {
        const {
          body,
          kwargs: { type },
        } = block;
        const html = await this.renderBlock("markdown", body);
        return `
          <div class="plugin-admonition plugin-admonition--${type}">
            ${html}
          </div>
        `;
      },
    },
  },
};
