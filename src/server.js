const express = require("express");
const bodyParser = require("body-parser");

const UserRoutes = require("./routes/user.routes.js");
const TaskRoutes = require("./routes/task.routes.js");
const get404 = require("./controllers/error.js");
const serverConfig = require("./config/server.config.js");
const sequelize = require("./util/database.js");
const errorMiddleware = require("./middlewares/errorMiddleware.js");

// Initializing the Express Application
const app = express();

// Defining the bodyParser middleWare on the whole application
app.use(bodyParser.urlencoded({ extended: true }));

// server routes
app.use("/users", UserRoutes);
app.use("/tasks", TaskRoutes);

// Page not found when the route is not found
app.use(get404);

// Error handling middleware
app.use(errorMiddleware);

sequelize
  // .sync({ force: true })
  .sync()
  .then(() => {
    app.listen(serverConfig.PORT, serverConfig.HOST);
    console.log(
      `Server Listening on ${serverConfig.HOST}:${serverConfig.PORT}`
    );
  })
  .catch((err) => {
    console.log(err);
  });
