// index.js
const app = require("./app");

const port = process.env.APP_PORT || 3000;

app.listen(3000, (err) => {
  if (err) {
    throw new Error(`An error occurred: ${err.message}`);
  }
  console.log(`Server is listening on http://localhost:${port}`);
});
