const charts = require('eleventy-charts')       // https://plug11ty.com/plugins/eleventy-charts/

module.exports = function(config) {

    eleventyConfig.addPlugin(charts)    // add eleventy-charts plugin after installing via npm

    config.addPassthroughCopy("src/js");
    
    config.setBrowserSyncConfig({
        notify: true
      });
    
      return {
        dir: {
            input: "src",
            output: "dist",
            data: "_data"
        }
    };
};