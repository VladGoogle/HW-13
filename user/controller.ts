import {userService} from "./service";



export class UserController {
    private userService = new userService();

    public async getUserById(ctx:any)
    {
        const {id} = ctx.params as any;
        const user = await this.userService.getUserById(id)
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
        const {name, email} = ctx.request.body as any;
        const user = await this.userService.createUser(name, email)
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
  }
