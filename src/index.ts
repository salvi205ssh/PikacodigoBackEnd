import cors from "cors";
import express from "express";
import routesUser from "./routes/user.route";
import routerReview from './routes/review.route';
import routesGame from "./routes/game.routes";
import routerSale from './routes/sale.route';
import routesGame_picture from "./routes/game_picture.routes";
import routerMessage from './routes/message.route';
import routerPegi from './routes/pegi.routes';

const app = express();
app.use(express.json())

const PORT = 3000;

const allowedOrigins = ['http://localhost:4200'];
const options: cors.CorsOptions = {
    origin: allowedOrigins
}
app.use(cors(options))

app.use('/api/games', routesGame);
app.use('/api/games_picture', routesGame_picture);
app.use('/api/users', routesUser);
app.use('/api/reviews', routerReview);
app.use('/api/sales', routerSale);
app.use('/api/messages', routerMessage);
app.use('/api/pegis', routerPegi);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});