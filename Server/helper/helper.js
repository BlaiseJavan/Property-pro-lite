
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const helper = {

  hashPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  },
  
  comparePassword(hashPassword, password) {
    return bcrypt.compareSync(password, hashPassword);
  },

  isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  },

  generateToken(email, password) {
    const token = jwt.sign({email, password},'newUser', { expiresIn: '7d' });
    return token;
  }
}
export default helper;  