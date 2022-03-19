const mongoose = require('mongoose');

const connectDatabase = async (dbUri) => {
  try {
    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('connected to database');
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = connectDatabase;
