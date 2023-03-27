import express from "express";
import routesUser from "./routes/userRoute";
import routerReview from './routes/review.route';

const app = express();
app.use(express.json())

app.use('/users', routesUser);
app.use('/reviews', routerReview);

const PORT = 3000;

console.log(`Servidor escuchando en el puerto ${PORT}`);
app.listen(PORT);

export default app;