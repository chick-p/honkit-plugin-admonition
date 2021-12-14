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
          kwargs: { type, iconClassName },
        } = block;
        const html = await this.renderBlock("markdown", body);
        return `
          <div class="plugin-admonition plugin-admonition--${type}">
            <div class="plugin-admonition-title plugin-admonition-title--${type}">
              <i class="${iconClassName || ""}"></i>
            </div>
            <div class="plugin-admonition-content plugin-admonition-content--${type}">
              ${html}
            </div>
          </div>
        `;
      },
    },
  },
};
