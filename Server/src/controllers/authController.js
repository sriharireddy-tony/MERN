const auth = require('../models/authModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const accessKey = process.env.ACCESS_KEY;
const refreshKey = process.env.REFRESH_KEY;
const accessTime = process.env.ACCESS_TIME;
const refreshTime = process.env.REFRESH_TIME;


register = async (req, res) => {
    // try {
    // Check if user already exists
    try{
        const existingUser = await auth.findOne({ email: req.body.email });
        if (existingUser) {
          return res.status(409).json({ message: 'Email already exists' });
        }
        const existingMobile = await auth.findOne({ mobileNo: req.body.mobileNo });
        if (existingMobile) {
          return res.status(409).json({ message: 'Mobile Number already exists' });
        }
        const existingTeamname = await auth.findOne({ teamName: req.body.teamName });
        if (existingTeamname) {
          return res.status(409).json({ message: 'Team Name not available' });
        }
      
        const salt = await bcrypt.genSalt(10);
        await bcrypt.hash(req.body.password, salt).then(hashedPassword => {
          if (hashedPassword) {
            req.body.password = hashedPassword;
          }
        })
      
        await auth.create(req.body).then(userResponse => {
           return res.status(201).json({message: 'User registered successfully'});
        }).catch(err => {
            res.status(500).json({ message: 'User registration failed!' });
        });
    } catch(err){
        res.status(500).json({ message: 'Internal server error' });
    }
  
  
    // Create a new user by using save method
    //   const user = new User(req.body);
    //   await user.save();
  
    //   res.status(201).json({statusCode:201, message: 'User registered successfully' });
    // } catch (error) {
    //   console.error(error);
    //   res.status(500).json({ message: 'Internal server error' });
    // }
  };


  login = async(req, res)=>{
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.loginpassword;

    try {
      const existUser = await auth.findOne({ email: email });
  
      if (existUser) {
        bcrypt.compare(password, existUser.password, function (err, bcryptRes) {
          if (!err && bcryptRes) {
            const accessToken = jwt.sign({ id: existUser._id, name: existUser.name, role: existUser.isAdmin }, accessKey, { expiresIn: accessTime });
            const refreshToken = jwt.sign({ id: existUser._id, name: existUser.name, role: existUser.isAdmin }, refreshKey, { expiresIn: refreshTime });
            res.json({ status: 'ok', accessToken, refreshToken, userName : existUser.name, role: existUser.isAdmin,
                                              message : 'Login Successfull!' });
          } else if (!bcryptRes) {
            res.status(401).json({ data: { bcryptRes }, message: 'Invalid Credentials' });
          }
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  }

  refreshToken = (req, res)=> {
    console.log(req);
    const { id, name, role } = req.decodedRefreshToken;
    const accessToken = jwt.sign({ id, name, role }, accessKey, { expiresIn: accessTime });
    return res.status(200).json({ accessToken });
  }

  module.exports = {
    register,
    login,
    refreshToken
  }