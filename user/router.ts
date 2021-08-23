// TODO: create a router and bind endpoints here
import {UserController } from './controller'
import Router from '@koa/router'
const bodyParser = require('koa-bodyparser')
const Koa = require('koa')
const app = new Koa();

const router = new Router();
router.use(bodyParser());

const userController = new UserController();



router.get('/users/:id', async (ctx:any)=>userController.getUserById(ctx))
router.get('/users', async (ctx:any)=>userController.getUsers(ctx))
router.post('/users', async (ctx:any)=> userController.createUser(ctx))
router.put('/users/:id', async (ctx: any)=> userController.updateUser(ctx))
router.delete('/users',async (ctx:any)=>userController.deleteUsers(ctx))
router.delete('/users/:id',async (ctx:any)=>userController.deleteUser(ctx))




export default router;
