const Koa = require('koa')
const app = new Koa();
import router from './user/router'
const bodyParser = require('koa-bodyparser')
const dotenv = require('dotenv');
dotenv.config();


app.use(bodyParser());


app.use(router.routes()).use(router.allowedMethods());

app.listen(process.env.SERVER_PORT, () => {
    console.log('server is listening on port ', process.env.SERVER_PORT);
});
