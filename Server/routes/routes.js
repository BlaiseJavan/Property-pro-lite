import express from 'express';
import propertyController from '../controllers/propertyController';


const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'welcome to property pro lite',
  });
});

router.post('/api/v1/property', propertyController.createProperty);
router.put('/api/v1/property/:id', propertyController.updateProperty);
router.put('/api/v1/makAsSold/:id', propertyController.markAsSold);

export default router;