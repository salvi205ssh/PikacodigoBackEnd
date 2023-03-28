import cors from "cors";
import express from "express";
import routesUser from "./routes/userRoute";
import routerReview from './routes/review.route';
import routesGame from "./routes/game.routes";

const app = express();
app.use(express.json())

app.use('/users', routesUser);
app.use('/reviews', routerReview);
app.use('/games', routesGame);

const PORT = 8532;

//localhost:3000/users

console.log(`Servidor escuchando en el puerto ${PORT}`);
app.listen(PORT);

export default app;