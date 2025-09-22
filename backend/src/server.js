const fs = require("fs");
const https = require("https");
const app = require("./app");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const sslOptions = {
  key: fs.readFileSync("./ssl/privatekey.pem"),
  cert: fs.readFileSync("./ssl/certificate.pem"),
};

https.createServer(sslOptions, app).listen(PORT, () => {
  console.log(`Secure server running at https://localhost:${PORT}`);
});
