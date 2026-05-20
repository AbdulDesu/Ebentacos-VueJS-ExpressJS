import express from "express";
import cors from "cors";
import router from "./routes/routes.js";
import * as apiHelper from "./helper/APIHelper.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(router);

app.get('/', function(req, res){
    res.json({ message: 'Eben Stand API, Created By Abdul Richard' });
});


function logErrors(err, req, res, next) {
    console.error("🔥 Error terjadi:", err.stack);
    next(err);
}

function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }

    apiHelper.APIResponseErr(res, false, err.message || "Terjadi kesalahan internal pada server", null);
}


app.use(logErrors);
app.use(errorHandler);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server berjalan pada port ${PORT}.`);
});