const withImages = require("next-images");
module.exports = withImages({
  webpack(config, options) {
    return config;
  },
  env: {
    api: "http://178.128.80.182:5001/api/",
    image: "http://178.128.80.182:5001",
    api_fe: "http://178.128.80.182:3000",
  },
});
// yang simple
// const withImages = require("next-images");
// module.exports = withImages();
