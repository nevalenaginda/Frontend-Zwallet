const withImages = require("next-images");
module.exports = withImages({
  webpack(config, options) {
    return config;
  },
  env: {
    api: "http://localhost:5001/api/",
    image: "http://localhost:5001",
    api_fe: "http://localhost:3000",
  },
});
// yang simple
// const withImages = require("next-images");
// module.exports = withImages();
