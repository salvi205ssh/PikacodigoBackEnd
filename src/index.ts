import express from "express";
import { connect } from "./database/database-config";
import routesUser from "./routes/userRoute";
import routesGame from "./routes/game.routes";
import routesGame_picture from "./routes/game_picture.routes";

const app = express();
app.use(express.json())

app.use('/users',routesUser);
app.use('/games',routesGame);
app.use('/games_picture',routesGame_picture);

const PORT = 8532;

console.log(`Servidor escuchando en el puerto ${PORT}`);
app.listen(PORT);

async function main() {
  try {
    connect();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();

export default app;
