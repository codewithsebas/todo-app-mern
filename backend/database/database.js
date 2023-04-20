import mongoose from "mongoose";

const connectDB = () => {
  mongoose.connect(process.env.URI, { useNewUrlParser: true });
  mongoose.connection.on("connected", () => {
    console.log("Successfully");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Disconnected");
  });

  mongoose.connection.on("error", () => {
    console.log("Error");
  });
};

export default connectDB;
