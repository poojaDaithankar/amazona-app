import mongoose from 'mongoose';
// Follow this tutorial to create a free monodb atlas account - https://www.youtube.com/watch?v=rPqRyYJmx2g
// DONT USE MY DATABASE, CREATE YOUR DB
const db = "mongodb+srv://DevConnectorMongoUser:DevConnectorMongoPassword@devconnector.r8egp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.info('Connected to mongodb atlas..');
  } catch (err) {
    console.error(`Not able to connect to mongodb atlas - ${err}`);
    // Exit app if failed to connect
    process.exit(1);
  }
};

export default connectDB;
