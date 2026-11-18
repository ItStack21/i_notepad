import express from 'express';
const router = express.Router();

router.post('/register', (req, res) => {
    const user_name = req.body.name;
    const user_email = req.body.email;
    const user_password = req.body.password;

    console.log({
        "USER NAME : ": user_name,
        "USER EMAIL : ": user_email,
        "PASSWORD : ": user_password
    });

    res.send("ACCOUNT REGISTERED!!")
});

router.post('/login', (req, res) => {
    const user_email = req.body.email;
    const user_password = req.body.password;

    console.log({
        "USER EMAIL : ": user_email,
        "PASSWORD : ": user_password
    });

    res.send("ACCOUNT REGISTERED!!")
});



router.get('/profile', (req, res) => {

});



router.patch('/update', (req, res) => {
    const user_email = req.body.email;
    const user_password = req.body.password;

    console.log({
        "USER EMAIL : ": user_email,
        "PASSWORD : ": user_password
    });

    res.send("ACCOUNT REGISTERED!!")
});


router.delete('/delete', (req, res) => {
    const user_email = req.body.email;
    const user_password = req.body.password;

    console.log({
        "USER EMAIL : ": user_email,
        "PASSWORD : ": user_password
    });

    res.send("ACCOUNT REGISTERED!!")
});





export default router;