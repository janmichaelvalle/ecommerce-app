import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import productRotes from './routes/productRoutes.js'
const port = process.env.PORT || 5001;
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

connectDB() // Connect to MongoDB

const app = express ();


app.get('/', (req, res) => {
  res.send("API is running...")
});

app.use('/api/products', productRotes);
app.use(notFound);
app.use(errorHandler)


app.listen(port, () => console.log(`Server running in ${process.env.NODE_ENV} on port ${port}`))