import Response from "../utils/response.utils.js";
import statusCodeUtils from "../utils/statusCode.utils.js";
const existing_email = [
    "bpaulc21@gmail.com",
    "abcd@gmail.com",
    "admin@gmail.com"
]
const UserController = {

    async createUser(req, res) {
        const user_name = req.body.name;
        const user_email = req.body.email;
        const user_password = req.body.password;
        const confirm_password = req.body.confirm_password;

        if (
            user_email.length == 0 ||
            user_name.length == 0 ||
            user_password.length == 0 ||
            confirm_password == 0
        ) {
            return Response.error(
                res,
                statusCodeUtils.BAD_REQUEST,
                "Fields cant be empty!"
            )
        }

        if (existing_email.includes(user_email)) {
            return Response.error(
                res,
                statusCodeUtils.CONFLICT,
                "User already exist!"
            )
        }

        if (user_password != confirm_password) {
            return Response.error(
                res,
                statusCodeUtils.BAD_REQUEST,
                "Password and Confirm Password not matching!"
            )
        }
        // Database Save
        return Response.success(
            res,
            statusCodeUtils.CREATED,
            "User created successfully!!",
            {
                "user_name": user_name,
                "email": user_email
            }
        )





    },

    async loginUser(req, res) { },

    async getMyProfile(req, res) { },

    async updateProfile(req, res) { },

    async deleteUser(req, res) { }
}

export default UserController;