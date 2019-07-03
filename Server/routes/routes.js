import express from 'express';
import propertyController from '../controllers/propertyController';


const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'welcome to property pro lite',
  });
});

router.post('/api/v1/property', propertyController.createProperty);

export default router;