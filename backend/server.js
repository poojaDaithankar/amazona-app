import express from 'express';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';

import connectDB from './db.js';
// connect to database
connectDB();

const app = express();



app.use('/api/users', userRouter);

// You had products endpoint here which were showing data from data.js files
// Now you added a different router with exact same path
// Means /api/products have 2 different resolution functions
// I have removed the other code and kept database stuff only

app.use('/api/products', productRouter);
app.get('/', (req, res) => {
  res.send('Server is ready');
});
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});