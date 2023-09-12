<<<<<<< HEAD
const path = require("path");
=======
const CracoAlias = require("craco-alias");
>>>>>>> main

module.exports = {
  plugins: [
    {
<<<<<<< HEAD
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
=======
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "tsconfig.paths.json",
      },
    },
  ],
>>>>>>> main
};
