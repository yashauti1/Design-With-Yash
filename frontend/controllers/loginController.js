const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {User, validateLogin}=require("../models/user.models");

const loginUser=async(req,res)=>{
    try{
        const { error } = validateLogin(req.body);
        if (error) return res.status(400).json({ message: error.details[0].message });
    
        const { email, password } = req.body;

        const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid email or password' });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(400).json({ message: 'Invalid email or password' });

    const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
} catch (error) {
  res.status(500).json({ message: 'Server error', error });
}
};

module.exports = 
loginUser
;