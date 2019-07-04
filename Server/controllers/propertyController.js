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

  static updateProperty(req, res) {
    const { id } = req.params;
    const property = Property.find(updateProperty => updateProperty.id == id);
    if (property) {
      (property.owner = req.body.owner), (property.price = req.body.price), 
      (property.status = req.body.status), (property.city = req.body.city),
      (property.state = req.body.state), (property.address = req.body.address),
      (property.type = req.body.type), (property.created_on = new Date()),
      (property.imageUrl = req.body.imageUrl);   
      return res.status(200).json({
        status: 'success', updateProperty: property,
      });
    }
    res.status(400).json({
      error: 'Property cannot be updated',
    });
  }
}

export default propertyController;