//import
import moment from 'moment';
import User from '../db/user';
import helper from '../helper/helper';
import userSchema from '../middleware/validation/userSchema';

//user controller
class userController {
  //signup function
  static Signup(req, res) {
    const newId = parseInt(User.length) + 1;
    const {email, firstName, lastName, address, phoneNumber, isAdmin, password} = req.body;
    const hashedPassword = helper.hashPassword(password);
    const newUser = userSchema.validate ({id: newId, email, firstName, lastName, address, phoneNumber, isAdmin, password: hashedPassword, created_on: moment.utc().format(),});
    const checkEmail = User.find(userEmail => userEmail.email === email);
    if(checkEmail){
      return res.status(400).json({
        status: 400, error: 'email is taken'
      });
    }
    //catching error
    if(newUser.error){
      return res.status(400).json({
        status: 400, error: newUser.error.details[0].message
      });
    }
    const token = helper.generateToken(email, password);
    newUser.token = token;
    User.push(newUser);
    return res.status(200).json({status: 200, data: {
        token:token, id: newUser.value.id, email: newUser.value.email, firstName: newUser.value.firstName, lastName: newUser.value.lastName, phoneNumber: newUser.value.phoneNumber, address: newUser.value.address, isAdmin: newUser.value.isAdmin
    },
  }); 
  }


  //display
  static ViewAllUsers(req, res) {
  
    return res.status(200).json({ status: 200, User });
  }

  //signin 
  static Signin(req, res) {
    const {email, password} = req.body;
    const user = User.find(user => {
      return user.email === email && helper.comparePassword(user.hashedPassword, password) 
    });
    const token = helper.generateToken(email, password);
    if (!user) return res.status(400).json({ status: '400', message: 'wrong username or password' });
    user.token = token;
    return res.status(200).json({ status: 'success', user});
  }
}

export default userController;
