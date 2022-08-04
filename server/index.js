const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
const { graphqlHTTP } = require("express-graphql");
const schema = require("./Schemas");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
