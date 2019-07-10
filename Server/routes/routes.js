import express from 'express';
import propertyController from '../controllers/propertyController';
import usercontroller from '../controllers/usersController';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'welcome to property pro lite',
  });
});

//properties routes
router.post('/api/v1/property', propertyController.createProperty);
router.put('/api/v1/property/:id', propertyController.updateProperty);
router.put('/api/v1/makAsSold/:id', propertyController.markAsSold);
router.delete('/api/v1/property/:id', propertyController.deleteProperty);
router.get('/api/v1/property', propertyController.getProperties);

//user routes
router.post('/api/auth/signup', usercontroller.Signup);

export default router;