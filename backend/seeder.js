import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from 'colors';
import users from "./data/users.js";
import products from './data/products.js';
import User from './models/userModel.js';
import Product from "./models/productModel.js";
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();


const importData = async () => {
  try {
    console.log('Deleting existing data...')
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    console.log('Existing data deleted.');
    
    console.log('Creating users...');
    const createdUsers = await User.insertMany(users);
    console.log('Users created:', createdUsers);

    const adminUser = createdUsers[0]._id;
    console.log('Transforming products data...');
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });
    console.log('Products data transformed:', sampleProducts);


    await Product.insertMany(sampleProducts);
   
    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};


if (process.argv[2] === '-d') {
  console.log('Destroy data command detected. Initiating data destruction...');
  destroyData();
  destroyData();
} else {
  console.log('Import data command detected. Initiating data import...');
  importData();
}