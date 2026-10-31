import connection from "../database/db.connection.js";

async function getUser(userId) {
    try {
        const users = await connection.query(
            'SELECT * FROM users WHERE id = ?',
            [userId] || 1
        );

        console.log(users[0]);

    } catch (error) {
        console.error('Database error:', error);
    }
}

getUser(1);