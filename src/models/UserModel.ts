import mongoose, { Schema } from "mongoose";

export interface User extends Document {
  name: string;
  email: string;
  image: string;
  verified: boolean;
  role: string;
  password: string;
}

const UserSchema: Schema<User> = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    image: {
      type: String,
      required: [true, "Image is required"],
    },
    role: {
      type: String,
      required: [true, "Role is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [
        /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
        "Please fill a valid email address",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  {
    timestamps: true,
  }
);

// const TodoModel = mongoose.models.Todo as mongoose.Model<Todo> || mongoose.model<Todo>("Todo", TodoSchema);
const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);

export default UserModel;
