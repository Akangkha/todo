import User from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
export const createUser = async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, password } = req.body;
    if (!(name && email && password)) {
      return res.status(400).send("Please fill all the fields");
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "User already exists. Please login" });
    }
    const hashedpass = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedpass });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    user.token = token;
    user.password = undefined;
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      return res.status(400).send("Please fill all the fields");
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send("User does not exist. Please sign up");
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).send("Invalid password");
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    if (!token) {
      return res.status(500).send("Error creating token");
    }

    user.token = token;
    user.password = undefined;
    const options = {
      expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
    res.status(200).cookie("token", token, options).json({ user, token });
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};
