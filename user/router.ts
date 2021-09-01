// TODO: create a router and bind endpoints here
import {UserController } from './controller'
import {Db} from '../db'
import Router from '@koa/router'
import jwt from 'koa-jwt'
import { createSecretKey } from 'crypto'
import {secret} from '../server'
const bodyParser = require('koa-bodyparser')
const Koa = require('koa')
const app = new Koa();

const router = new Router();
router.use(bodyParser());

const DB = new Db();
(async ()=> await DB.createConnection())();

const userController = new UserController(DB);


router.post('/users/create', async (ctx:any)=> userController.createUser(ctx))
router.post('/users/register', async (ctx:any)=> userController.registerUser(ctx))
//router.post('/users/login', async (ctx:any)=> userController.loginUser(ctx))
router.get('/users/list', async (ctx:any)=> userController.getUsers(ctx))
router.get('/users/find/by/:email', async (ctx:any)=> userController.getUserByEmail(ctx))
/*router.get('/users/find/by/:id', jwt({
    secret: secret
}), async (ctx:any)=>userController.getUserById(ctx))*/
router.put('/users/update/:id', async (ctx: any)=> userController.updateUser(ctx))
router.delete('/users/:id',async (ctx:any)=>userController.deleteUser(ctx))
router.delete('/users/delete/all',async (ctx:any)=>userController.deleteUsers(ctx))


export default router;
