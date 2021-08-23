import {UserDao}  from '../db/user'
import {User}  from '../db/user'

export class userService {
    private userDao = new UserDao();

    public async getUserById(id:any)
    {
        return await this.userDao.getUserById(id);
    }

    public async getUsers()
    {
        return await this.userDao.getUsers();
    }

    public async createUser(name:any, email:any)
    {
        return await this.userDao.createUser(name, email);
    }

    public async updateUser(id:any, name:any,email:any)
    {
        return await this.userDao.updateUser(id,name,email);
    }

    public async deleteUser(id:any)
    {
        return await this.userDao.deleteUser(id);
    }

    public async deleteUsers()
    {
        return await this.userDao.deleteUsers();
    }
}
