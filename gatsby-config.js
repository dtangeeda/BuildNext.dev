module.exports = {
  siteMetadata: {
    title: `BuildNext.dev`,
    description: `BuildNext.dev public website`,
    author: `SeamLogic`,
    github: `https://github.com/`,
    blog: `https://seamlogic.com`,
    product: `https://seamlogic.com`,
    docs: `https://seamlogic.com`

  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `BuildNext`,
        short_name: `BuildNext`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/images/tailwind-icon.png`
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css", "src/css/global.css"]
      }
    }
  ]
};
