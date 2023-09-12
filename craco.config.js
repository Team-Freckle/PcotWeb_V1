const path = require("path");

module.exports = {
  plugins: [
    {
      plugin: require("@semantic-ui-react/craco-less"),
    },
  ],
  webpack: {
    alias: {
      // Add any Semantic UI LESS variables overrides here
      // For example, to change the primary color:
      // 'site': path.resolve(__dirname, 'src/site.less'),
    },
  },
};
