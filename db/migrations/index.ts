// TODO: write here sql scripts for initial execution (create user table for ex.)
import {Db} from "../index";

async function run(){
    try {
        let db = new Db()
        console.log('Start db')
        const client = await db.createConnection();
        console.log('Connected db')

        // await db.pool.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
        await client.query("CREATE TABLE IF NOT EXISTS users(id serial, name varchar(100), email text, password varchar(255))");
        await client.release();
        console.log('db created')
    } catch(e) {
        console.log(e)
    }
}



console.log('start')
run().then(() => console.log('Finished')).catch(e => console.error(e))