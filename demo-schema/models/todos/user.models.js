import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      // required: [true, 'Password is required'], // if no password is provided then he string is printed
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema); //exporting the schema named User (store in mongo DB as users) based on userSchema.

//Above we are exporting a variable named User where a method to create a model is called, the model name is user and the model is made on the basis of userSchema

//When the model is stores in mongoDB the model name User is converted to lowercase, plural ie users
