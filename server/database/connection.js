const mongoose = require("mongoose");

const db_uri =
  "mongodb+srv://rariom:marianne07@cluster0.20txl.mongodb.net/facebook?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    // mongodb connection
    const con = await mongoose.connect(process.env.MONGODB_URI || db_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`MongoDB connected successfully: ${con.connection.host}`);
  } catch (err) {
    console.log(`Connection failed:${err}`);
    process.exit(1);
  }
};

// export db connection
module.exports = connectDB;
