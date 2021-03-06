import express from 'express';
import propertyController from '../controllers/propertyController';
import usercontroller from '../controllers/usersController';

const router = express.Router();


router.post('/api/v1/property', propertyController.createProperty);
router.put('/api/v1/property/:id', propertyController.updateProperty);
router.put('/api/v1/makAsSold/:id', propertyController.markAsSold);
router.delete('/api/v1/property/:id', propertyController.deleteProperty);
router.get('/api/v1/property', propertyController.getProperty);
router.get('/api/v1/propertyType/:type', propertyController.getPropertyByType);
router.get('/api/v1/property/:id', propertyController.getOneProperty);

router.post('/api/auth/signup', usercontroller.Signup);
router.post('/api/auth/signin', usercontroller.Signin);
router.get('/api/auth/displayUsers', usercontroller.ViewAllUsers);

export default router;
