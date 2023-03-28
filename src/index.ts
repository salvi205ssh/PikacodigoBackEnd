import cors from "cors";
import express from "express";
import routesUser from "./routes/user.route";
import routerReview from './routes/review.route';
import routesGame from "./routes/game.routes";

const app = express();
app.use(express.json())

const allowedOrigins = ['http://localhost:4200'] ;
const options: cors.CorsOptions = { origin: allowedOrigins } 
app.use(cors(options))

app.use('/users', routesUser);
app.use('/reviews', routerReview);
app.use('/games', routesGame);

const PORT = 3000;

//localhost:3000/users

console.log(`Servidor escuchando en el puerto ${PORT}`);
app.listen(PORT);

export default app;