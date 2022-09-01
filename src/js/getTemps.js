// const axios = require("axios");

// anonymous function
module.exports = async () => {
    try {
        const response = await fetch.get("https://sdcmhgmcog.execute-api.us-east-1.amazonaws.com/dev/items");
        return response.Items; // response object contains dictionary called "Items"
    }
    catch (error) {
        console.error(error);
    }

}