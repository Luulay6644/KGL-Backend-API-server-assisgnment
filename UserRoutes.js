The project is Karibu Groceries 

User Routes 

routes/userRoutes.js 

const express = require("express"); 
const bcrypt = require("bcryptjs"); 
const jwt = require("jsonwebtoken"); 
const User = require("../models/User"); 
const { relative } = require("node:path")
 
const router = express.Router(); 

// Register 
router.post("/register", async (req, res) => { 
    const { name, email, password, role} = req.body; 

    const user = await User.create({
        name,
        email,
        password: hashedPassword = await 
bcrypt.hash(password, 10); 

    const user = await User.create({
        name, 
        email,
        password: hashedPassword,
        role, 
    });  

    res.status(201).json(user);
    });   

    // Login 
    router.post("/login". async (req, res) => { 

        const { email, password} = req.body;  

        const user = await 
    User.findOne({ email }); 

       if (!user) {
        return res.status(401).json({ message: "User not found" }); 
       }  

       const isMatch = await 
    bcrypt.compare(password, user.password); 

       if (!isMatch) {
        return res.status(401)json({ message: "Invalid credentials" });
       }  

       const token = jwt.sign(
        { id: user._id, role: user.role }, 
        process.env.JWT_SECRET, 
        { expiresIn: "1d" }
       ); 
       res.staus(200).json({ token });
    });
});     

module.exports = router;  