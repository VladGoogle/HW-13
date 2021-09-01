// TODO: write here sql scripts for initial execution (create user table for ex.)
import {Db} from "../index";

async function run(){
    let db = new Db()
    await db.createConnection();

    await db.pool.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    await  db.pool.query("CREATE TABLE IF NOT EXISTS users(id uuid NOT NULL DEFAULT uuid_generate_v4(), name varchar(100), email text, password varchar(255))");
    await  db.pool.end();
}

(async()=>{
    await run();
})()
