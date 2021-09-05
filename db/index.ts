// TODO: move conn pool here
import config from '../config/database'
import {Pool, PoolClient} from 'pg'

console.log(config)

export class Db {

    public pool: Pool;
    public client: PoolClient | undefined;

    constructor() {
       this.pool = new Pool({
            user: config.user,
            host: config.host,
            database: config.database,
            password: config.password,
            port: config.port
        });
    }

    public async createConnection(): Promise<PoolClient> {
        this.client = await this.pool.connect();
        return this.client
    }
}

