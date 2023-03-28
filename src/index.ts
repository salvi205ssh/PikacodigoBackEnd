import express from "express";
import routesUser from "./routes/userRoute";
import routerReview from './routes/review.route';
import routesGame from "./routes/game.routes";
import routerSale from './routes/sale.route';

const app = express();
app.use(express.json())

const PORT = 3000;

app.use('/users', routesUser);
app.use('/reviews', routerReview);
app.use('/games', routesGame);
app.use('/sales', routerSale);

console.log(`Servidor escuchando en el puerto ${PORT}`);
app.listen(PORT);

export default app;