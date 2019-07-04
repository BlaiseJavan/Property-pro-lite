import moment from 'moment';
import Property from '../db/property';

class propertyController {
  
  static createProperty(req, res) {
    const newId = parseInt(Property.length) + 1;
    const {
      owner, price, status, city, state, address, type, created_on, imageUrl,
    } = req.body;
    const newProperty = {
      id: newId,
      owner,
      price,
      status: 'available',
      city,
      state,
      address,
      type,
      created_on: new Date(),
      imageUrl,
    };
    Property.push(newProperty);
    return res.status(200).json({status: 'success', newProperty });
  }
}

export default propertyController;