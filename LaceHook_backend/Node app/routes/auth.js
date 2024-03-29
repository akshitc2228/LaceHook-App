const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {

    try {
        //best explanation of bcrypt and salt and hashing on this link: https://www.youtube.com/watch?v=O6cmuiTBZVs

        //generating salt which will be added to the password and then compiled into a hash
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt); //this does the hashing of the password with the salt

        //create new user
        const newUser = new User ({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        //save user and respond
        const user = await newUser.save();
        res.status(200).json(user) //set status to OK and print user data in json format
    }   catch (err) {
        res.status(500).json(err)
    }
});

//LOGIN PROCESS
router.post("/login", async(req, res) => {
    try {
        const user = await User.findOne({email:req.body.email});
        !user && res.status(404).json("user not found") //NOTE TO SELF: this is just a clever if statement

        const validPass = await bcrypt.compare(req.body.password, user.password)
        !validPass && res.status(400).json("invalid password")

        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router