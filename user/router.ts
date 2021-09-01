// TODO: create a router and bind endpoints here
import {UserController } from './controller'
import Router from '@koa/router'
import jwt from 'koa-jwt'
import { createSecretKey } from 'crypto'
import {secret} from '../server'
const bodyParser = require('koa-bodyparser')
const Koa = require('koa')
const app = new Koa();

const router = new Router();
router.use(bodyParser());

const userController = new UserController();



router.post('/users', async (ctx:any)=> userController.createUser(ctx))
router.post('/register', async (ctx:any)=> userController.registerUser(ctx))
router.post('/loginUser', async (ctx:any)=> userController.loginUser(ctx))
router.get('/users', async (ctx:any)=> userController.getUsers(ctx))
router.get('/users/:email', async (ctx:any)=> userController.getUserByEmail(ctx))
router.get('/users/:id', jwt({
    secret: secret
}), async (ctx:any)=>userController.getUserById(ctx))
router.delete('/users',async (ctx:any)=>userController.deleteUsers(ctx))
router.put('/users/:id', async (ctx: any)=> userController.updateUser(ctx))
router.delete('/users/:id',async (ctx:any)=>userController.deleteUser(ctx))




export default router;
