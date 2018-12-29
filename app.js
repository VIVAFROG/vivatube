import express from "express";
import morgan from "morgan"; //for logging
import helmet from "helmet"; //For security
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";

import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";


const app = express();

app.use(helmet()); // for security
app.set("view engine", "pug");
app.use(cookieParser()); // cookie 전달 받아서 사용할 수 있도록 만들어 주는 middleware
app.use(bodyParser.json()); // 사용자가 웹사이트로 전달하는 정보들을 검사하는 middleware (from 에 담아서 업로드))
app.use(bodyParser.urlencoded({ extended: true })); //
app.use(morgan("dev")); // application 에서 발생 하는 모든 일 logging
app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);


export default app;
