// TODO: add user interface and logic for storing and fetching
import pool from "./index";

export interface User {
    id: number,
    name: string,
    email: string,
    password:string
}

export class UserDao {

    async getUsers(): Promise<User[]> {
        const {rows} = await pool.query('SELECT * FROM users ORDER BY id ASC')
        return rows
    };

    async getUserById(id:any): Promise<User> {
       const {rows} = await pool.query('SELECT * FROM users WHERE id = $1', [id])
       return rows[0]
    };

    async getUserByEmail(email:any): Promise<User> {
        const {rows} = await pool.query('SELECT * FROM users WHERE email = \'$1\'', [email])
        return rows[0]
     };


    async createUser(name:any,email:any, password:any): Promise<User> {
        const res = await pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *', [name,email,password])
        return res.rows[0]
    }

    async updateUser(id:any,name:any,email:any): Promise<User> {
        const res = await pool.query('UPDATE  users SET name = $1, email = $2 WHERE id = $3 RETURNING *', [name,email,id])
        return res.rows[0]
    }

    async deleteUser(id:any): Promise<User> {
        const {rows} = await pool.query('DELETE FROM users WHERE id = $1', [id])
        return rows[0]
    }

    async deleteUsers(): Promise<User[]> {
        const {rows} = await pool.query('DELETE FROM users')
        return rows
    }
}
