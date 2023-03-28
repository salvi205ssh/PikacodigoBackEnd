import cors from "cors";
import express from "express";
import { connect } from "./database/database-config";
import routesUser from "./routes/userRoute";

const app = express();
app.use(express.json())

// Definir los orígenes permitidos
const allowedOrigins = ["http://localhost:4200"];

// Configurar las opciones de cors para permitir solicitudes desde los orígenes permitidos
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

// Utilizar el middleware cors configurado en la aplicación Express
app.use(cors(options));

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
