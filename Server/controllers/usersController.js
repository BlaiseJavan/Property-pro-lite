
import moment from 'moment';
import User from '../db/user';
import helper from '../middleware/helper';


class userController {
  
  static Signup(req, res) {
    const newId = parseInt(User.length) + 1;
    const {email, firstName, lastName, address, phoneNumber, isAdmin, password} = req.body;
    const hashedPassword = helper.hashPassword(password);
    const newUser = {id: newId, email, firstName, lastName, address, phoneNumber, isAdmin, hashedPassword, created_on: moment.utc().format(),};
    const token = helper.generateToken(email, password);
    newUser.token = token;
    User.push(newUser);
    return res.status(200).json({status: 'success', newUser: newUser});
  }

  static Signin(req, res) {
    const {email, password} = req.body;
    const user = User.find(user => {return user.email === email && helper.comparePassword(user.hashedPassword, password) });
    const token = helper.generateToken(email, password);
    if (!user) return res.status(401).json({ status: '401', message: 'wrong username or password' });
    user.token = token;
    return res.status(200).json({ status: 'success', user});
  }
  

}

export default userController;
