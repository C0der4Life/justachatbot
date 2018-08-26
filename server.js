const config = require('./config.json');

const routes = require("./routes/index.js")(config);

console.log('Discord bot is running!');
