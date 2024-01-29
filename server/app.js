const express = require("express");
const app = express();
require("dotenv").config();
const connectDb = require("./utils/db");
const bannnerRoute = require("./routes/banner-routes");
const errorMiddleware = require("./middleware/error-middleware");
const cors = require("cors");

// handling cors error
const corsOptions = {
    origin: "http://localhost:3000",
    methods: "GET,POST, DELETE, PATCH, HEAD",
    credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());

app.use("/api", bannnerRoute);

app.use(errorMiddleware);

const port = 5000;
connectDb().then(() => {
    app.listen(port, () => {
        console.log(`server is running on port number ${port}`);
    });
});
