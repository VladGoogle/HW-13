import {UserDao}  from '../db/user'
import {User}  from '../db/user'
import bcrypt from 'bcrypt'
import {Db} from "../db";

export class userService {
    private userDao: UserDao;

    constructor(Db: Db) {
        this.userDao = new UserDao(Db);
    }

    public async getUserById(id:any)
    {
        return await this.userDao.getUserById(id);
    }

    public async getUserByEmail(email:any)
    {
        return await this.userDao.getUserByEmail(email);
    }

    public async getUsers()
    {
        return await this.userDao.getUsers();
    }

    public async createUser(name:any, email:any, password:any)
    {
        //password = await bcrypt.hash(password ,10)
        return await this.userDao.createUser(name, email,password);
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
