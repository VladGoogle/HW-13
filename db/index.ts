// TODO: move conn pool here
import config from '../config/database'
import {Pool} from 'pg'

export class Db {

    public pool: Pool;

    constructor() {
       this.pool = new Pool({
            user: config.user,
            host: config.host,
            database: config.database,
            password: config.password,
            port: config.port
        });
    }

    public async createConnection(): Promise<void> {
        await this.pool.connect();
    }
}

