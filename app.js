import express from "express";
import cors from "cors";
import { db } from "./models/database.js";
import router from "./routes/transactionRouter.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.send("Financial Control API"));
app.use("/transactions", router);

app.listen(process.env.PORT || 4000, () => {
    console.log("API started");
});

(async () => {
    try {
        await db.mongoose.connect(db.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });

        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log(`Error to conect MongoDB. Error: ${error}`);
    }
})();