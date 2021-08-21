import {userService} from "./service";



export class UserController {
    private userService = new userService();

    /*public async getUserById(id:any)
    {
        return await this.userService.getUserById(id);
    }*/

    public async getUsers(ctx:any)
    {
        const user = await this.userService.getUsers()
        ctx.response.status = 200;
        ctx.body = user;
    }

    public async createUser(ctx:any)
    {
        const {name, email} = ctx.request.body as any;
        const user = await this.userService.createUser(name, email)
        ctx.response.status = 201;
        ctx.response.body = user
    }

    public async updateUser(ctx: any) {
        const {id} = ctx.params.id as any;
        const {name, email} = ctx.request.body as any;
        const user = await this.userService.updateUser(id,name,email)
        ctx.response.status = 200;
        ctx.response.body = user
    }

    /*public async deleteUser(id:any)
    {
        return await this.userService.deleteUser(id);
    }

    public async deleteUsers()
    {
        return await this.userService.deleteUsers();
    }*/
  }