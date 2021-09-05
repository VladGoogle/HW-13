import {userService} from "./service";
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'
import {secret} from '../server'
import {Pool} from "pg";
import {Db} from "../db";


export class UserController {
    private userService: userService;

    constructor(db: Db) {
    this.userService = new userService(db);
    }

    public async getUserById(ctx:any)
    {
        const {id} = ctx.params as any;
        const user = await this.userService.getUserById(id)
        ctx.response.status = 200;
        ctx.response.body = user;
    }

    public async getUserByEmail(ctx:any)
    {
        const {email} = ctx.params as any;
        const user = await this.userService.getUserById(email)
        ctx.response.status = 200;
        ctx.response.body = user;
    }

    public async getUsers(ctx:any)
    {
        const user = await this.userService.getUsers()
        ctx.response.status = 200;
        ctx.response.body = user;
    }

    public async createUser(ctx:any)
    {
        const {name, email,password} = ctx.request.body as any;
        const user = await this.userService.createUser(name, email,password)
        ctx.response.status = 201;
        ctx.response.body = user
    }

    public async updateUser(ctx: any) {
        const {id} = ctx.params as any;
        const {name, email} = ctx.request.body as any;
        const user = await this.userService.updateUser(id,name,email)
        ctx.response.status = 200;
        ctx.response.body = user
    }

    public async deleteUser(ctx:any)
    {
         const {id} = ctx.params as any;
         const user = await this.userService.deleteUser(id)
         ctx.response.status = 200;
         ctx.response.body = user
    }

    public async deleteUsers(ctx:any)
    {
        const user = await this.userService.deleteUsers()
        ctx.response.status = 200;
        ctx.response.body = user
    }

    public async registerUser(ctx:any)
    {
        const {name,email,password} = ctx.request.body as any;
        const userObj = await this.userService.createUser(name, email,password)
        ctx.status =201;
        ctx.body=userObj;
    }


    public async loginUser(ctx:any)
    {    
        const user = ctx.request.body as any;
        const userObj = await this.userService.getUserByEmail(user.email);
        const {email, password, ...userInfo}=userObj;
        if(await bcrypt.compare(user.password, userObj.password))
        {
            ctx.body={
                token: jsonwebtoken.sign({
                    subject:userInfo,
                    data: {
                        user_id: userInfo.id
                    },
                    exp:Math.floor(Date.now()/1000)+ (60*60),
                }, secret)
            };
        }
    }
  }
