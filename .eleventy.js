module.exports = function(config) {

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