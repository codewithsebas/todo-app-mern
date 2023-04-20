const mongoose = require('mongoose')

const URI =
  "mongodb+srv://joabgiraldo:a3y5DY0XuZO6KYkc@todoapp.cyj7epr.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;