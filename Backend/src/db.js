import {
    MYSQL_DATABASE,
    MYSQL_HOST,
    MYSQL_PASSWORD,
    MYSQL_PORT,
    MYSQL_USER,
} from "./config.js";
import mysql from "mysql2";

export const pool = mysql.createPool({
    port: MYSQL_PORT,
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error("Error connecting to the database: ", err);
        return;
    }
    console.log("Database connected");
    connection.release();
});