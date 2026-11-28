import Response from "../utils/response.utils.js";
import statusCodeUtils from "../utils/statusCode.utils.js";
import User from "../model/user.model.js";

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

        if (await User.findByEmail(user_email) != null) {
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
        const result = User.createNewUser(user_name, user_email, user_password);
        return Response.success(
            res,
            statusCodeUtils.CREATED,
            "User created successfully!!",
            {
                result
            }
        )





    },

    async loginUser(req, res) { },

    async getMyProfile(req, res) { },

    async updateProfile(req, res) { },

    async deleteUser(req, res) { }
}

export default UserController;