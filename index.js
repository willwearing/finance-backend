require("dotenv").config();

const server = require("./server.js");

const port = process.env.PORT || 5200;
const secret = process.env.SECRET_THING || "foo";

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
