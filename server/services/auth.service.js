import { User } from "../models/user.js";
// console.log(User);
async function register(req, res) {
    const { email, password } = req.body;
    let ifuser = await User.findOne({ email })
    if (!ifuser) {
        console.log("created new user on request");
        const newUser = new User({ email, password });
        await newUser.save();
        // req.session.user_id = newUser._id;
        res.json({
            "user": newUser,
            "message": "registered sucessfully and logged in",
            "register": true
        })
    } else {
        console.log("well user already there");
        res.json({
            "message": "user already exists",
            "register": false
        })
    }
}

async function login(req, res) {
    const { email, password } = req.body;
    const foundUser = await User.findAndValidate(email, password);
    if (foundUser) {

        return res.json({
            "currUser": foundUser.email,
            "message": "logged in",
            "login": true
        })
    } else {
        return res.send({
            "message": "something is wrong",
            "login": false
        })
    }
}

function logout(req, res) {

    res.json({ "message": "you were logged out" })
}


export { register, login, logout };