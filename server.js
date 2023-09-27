import express, { Express } from "express";
import bodyParser from "body-parser";

import serverConfig from "./config/server.config.js";
import sequelize from "./util/database.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

// Initializing the Express Application
const app = express();

// Defining the bodyParser middleWare on the whole application
app.use(bodyParser.urlencoded({ extended: true }));

// Page not found when the route is not found
app.use(get404);

// Error handling middleware
app.use(errorMiddleware);

sequelize
  .sync({ force: true })
  .then(() => {
    app.listen(serverConfig.PORT, serverConfig.HOST);
    console.log(
      `Server Listening on ${serverConfig.HOST}:${serverConfig.PORT}`
    );
  })
  .catch((err) => {
    console.log(err);
  });
