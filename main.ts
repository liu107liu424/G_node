import express from 'express'
import cors from 'cors'
import { expressjwt } from 'express-jwt'
import { Request, Response, Errback } from 'express'
import webRouter from './src/webApi/router'
import appApi from './src/appApi/router'
import config from './config'

const app = express();
app.use(express.json());

app.use(cors())
app.use(webRouter)
app.use(express.urlencoded({ extended: true }));

const jwtMiddleware = expressjwt({ secret: config.jwtSecretKey, algorithms: ['HS256'] }).unless({ path: ['/api/login'] });
app.use(jwtMiddleware);

app.use((err: Errback, req: Request, res: Response, next: any) => {
  if (err.name === "UnauthorizedError") {
    return res.send({ code: 401, data: "登陆过期，请先登录" });
  }
  res.send({ code: 500, data: "未知错误" });
});
app.use(appApi)

app.listen(config.Port, () => console.log('服务器已启动'));