/* eslint-disable linebreak-style */
import express from 'express';
import router from '../routes/routes';

const app = express();
app.use(express.json());

app.use(router);

app.use((req, res) => {
    return res.status(404).json({
        status: 404,
        error: 'not found!',
    });
  });

app.listen(process.env.PORT || 5000);
console.log('app running on port');

export default app;
