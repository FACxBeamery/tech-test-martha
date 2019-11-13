const app = require("./src/server");

const port = process.env.PORT || 4000;

app.listen(port, () =>
  console.log(`Server running! Listening on port ${port}`)
);
