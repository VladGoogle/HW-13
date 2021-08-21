// TODO: move conn pool here
import config from '../config/database'
import {Pool} from 'pg'

const pool = new Pool({
    user: config.user,
    host: config.host,
    database: config.database,
    password: config.password,
    port: config.port
});

export default pool;


