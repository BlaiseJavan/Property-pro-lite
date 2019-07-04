/* eslint-disable linebreak-style */
import express from 'express';
import router from '../routes/routes';

const app = express();
app.use(express.json());

app.use(router);

app.listen(process.env.PORT || 9090);
console.log('app running on port');

export default app;
