// src\database\db.connection.js
import connection from "../config/db.config.js";
async function query(sql, params) {
    const [rows, fields] = await connection.execute(sql, params);
    return rows;
}

export default { query };