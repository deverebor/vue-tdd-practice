module.exports = {
  "*.{js,jsx,vue,ts,tsx}": [
    "vue-cli-service lint",
    "yarn lint:pre-commit",
    "vue-cli-service test:unit --bail --findRelatedTests --maxWorkers=50%",
  ],
};
