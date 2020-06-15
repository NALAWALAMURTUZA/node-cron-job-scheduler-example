import * as mongoose from 'mongoose';
import express from "express";
import job from './jobs/job';
export const app = express();
mongoose
    .connect('mongodb://localhost:27017/demo', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        serverSelectionTimeoutMS: 5000 // Timeout after 5s instead of 30s
    })
    .then(async connection => {
        app.listen(app.get("port"), () => {
            console.log(("App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
            console.log("Press CTRL-C to stop\n");
            job.shopRefresh()
        });
        app.on('close', () => {
            app.removeAllListeners();
        });
    })
    .catch(error => console.log(error));