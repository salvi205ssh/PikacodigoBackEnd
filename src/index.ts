import express from "express";
import { connect } from "./database/database-config";
import routesUser from "./routes/userRoute";

const app = express();

app.use('/users',routesUser);

const PORT = 3000;

//localhost:3000/users

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
