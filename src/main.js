import express from 'express';
import userRoute from './routes/user.route.js';
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoute);


app.listen(port, () => {
    console.log("Server running at http://localhost:${" + port + "}");
});