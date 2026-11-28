import connection from "../config/db.config.js";
import QueryUser from "../database/user.query.js";


const User = {

    async createNewUser(name, email, password) {
        const [result] = await connection.execute(QueryUser.REGISTER_USER,
            [name, email, password]
        )

        return result;
    },

    async findByEmail(email) {
        const [result] = await connection.execute(QueryUser.IS_USER_EXIST, [email]);
        return result[0] || null
    },

    async loginUser() {

    },

    async getMyProfile() {

    },

    async updateProfile() {


    },

    async deleteProfile() {

    }


}

export default User;