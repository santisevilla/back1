const app = require("./app.js");
const { sequelize } = require("./database/database.js");

async function main() {
  try {
    await sequelize.sync({ force: false });
    app.listen(3000);
    console.log("Server listening in a port", 3000);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
