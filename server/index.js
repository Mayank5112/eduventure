import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors"
import router from "./routes/routes.js";
// constants
const app = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors());
app.use(session({
    secret: "notagoodsecret",
    resave: true,
    saveUninitialized: true
}));

app.use("/", router);

app.listen(port, (err) => {
    if (!err) {
        console.log(`server runnig on ${port}`);
    } else {
        console.log(err);
    }
})