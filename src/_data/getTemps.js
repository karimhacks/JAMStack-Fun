const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
  let url = "https://sdcmhgmcog.execute-api.us-east-1.amazonaws.com/dev/items";

  /* This returns a promise */
  return EleventyFetch(url, {
    //Items: "Items", // save for 1 day
    duration: "10s",    // save for 10 seconds
    type: "json"    // we’ll parse JSON for you
  });
};
