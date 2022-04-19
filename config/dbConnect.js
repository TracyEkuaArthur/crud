const mongoose = require("mongoose") ;

const dbConnect = async () => {
  try {
      await mongoose.connect("mongodb://localhost:27017/blog");
      console.log("Database connected successfully!");
  } catch (error) {
      console.log(error)
      process.exit(1)
  }
};

module.exports = {
    dbConnect,
};

// 127.0.01