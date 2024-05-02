import mongoose from "mongoose";

export const DBconfig = async () => {
  try {
    console.log(process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI!);

    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Mongo DB connected");
    });

    connection.on("error", (error) => {
      console.log(
        "Something went wrong in db, make sure it up & running " + error
      );
    });
  } catch (error) {
    console.log(error);
    process.exit();
  }
};
