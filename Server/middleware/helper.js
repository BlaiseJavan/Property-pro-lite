// src/usingDB/controllers/Helper.js
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const helper = {
  /**
   * Hash Password Method
   * @param {string} password
   * @returns {string} returns hashed password
   */
  hashPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  },
  /**
   * comparePassword
   * @param {string} hashPassword 
   * @param {string} password 
   * @returns {Boolean} return True or False
   */
  comparePassword(hashPassword, password) {
    return bcrypt.compareSync(password, hashPassword);
  },
  /**
   * isValidEmail helper method
   * @param {string} email
   * @returns {Boolean} True or False
   */
  isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  },
  /**
   * Gnerate Token
   * @param {string} email
   * @param {string} password
   * @returns {string} token
   */
  generateToken(email, password) {
    const token = jwt.sign({email, password},'newUser', { expiresIn: '7d' });
    return token;
  }
}
export default helper;  