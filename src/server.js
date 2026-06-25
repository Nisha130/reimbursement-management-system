const app = require("./app");
const pool = require("./db/connection");

const PORT = process.env.PORT || 7002;

pool.connect()
  .then(() => {
    console.log("Database Connected Successfully");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database Connection Failed:", err);
  });