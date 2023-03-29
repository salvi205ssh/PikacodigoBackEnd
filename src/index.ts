import cors from "cors";
import express from "express";
import routesUser from "./routes/user.route";
import routerReview from './routes/review.route';
import routesGame from "./routes/game.routes";
import routerSale from './routes/sale.route';
import routesGame_picture from "./routes/game_picture.routes";
import routerMessage from './routes/message.route';

const app = express();
app.use(express.json())

const PORT = 3000;

const allowedOrigins = ['http://localhost:4200'];
const options: cors.CorsOptions = {
    origin: allowedOrigins
}
app.use(cors(options))

app.use('/games', routesGame);
app.use('/games_picture', routesGame_picture);
app.use('/users', routesUser);
app.use('/reviews', routerReview);
app.use('/sales', routerSale);
app.use('/messages', routerMessage);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});