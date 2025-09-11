const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Contacts API",
    description: "Contacts API"
  },
  // host: "localhost:3000", // For Testing
  host: "https://cse341-node-basl.onrender.com", // For Render
  schemes: ["http", "https"]
};

const outputFile = "./swagger.json";
const routes = ["./routes/index.js"];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);
