import mongoose from "mongoose";

const Connection = async () => {
  const url =
    "mongodb+srv://ankur1231:Zero_1231@cluster0.nk8bl.mongodb.net/inshorts?retryWrites=true&w=majority";
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connected to the database");
  } catch (error) {
    console.log("Error connecting to the database", error);
  }
};

export default Connection;
