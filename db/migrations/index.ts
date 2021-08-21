// TODO: write here sql scripts for initial execution (create user table for ex.)
import pool from "../index";

async function run(){
    await pool.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    await pool.query("CREATE TABLE IF NOT EXISTS users(id uuid NOT NULL DEFAULT uuid_generate_v4(), name varchar(100), email text)");
    await pool.end();
}

(async()=>{
    await run();
})()
