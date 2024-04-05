import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';

import productRotes from './routes/productRoutes.js'
const port = process.env.PORT || 5001;

connectDB() // Connect to MongoDB

const app = express ();


app.get('/', (req, res) => {
  res.send("API is running...")
});

app.use('/api/products', productRotes);


app.listen(port, () => console.log(`Server running in ${process.env.NODE_ENV} on port ${port}`))