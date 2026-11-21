import express from 'express';
import UserController from '../controller/user.controller.js';
const router = express.Router();

router.post('/register', UserController.createUser);
router.post('/login', UserController.loginUser)



router.get('/profile', UserController.getMyProfile)


router.patch('/update', UserController.updateProfile)


router.delete('/delete', UserController.deleteUser)





export default router;