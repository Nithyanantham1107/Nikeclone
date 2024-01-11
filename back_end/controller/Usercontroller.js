const User = require("../model/User");
const Viewuser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
const deleteuser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(200).json({ message: "NOT FOUND DATA!!" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: error });
  }
};
const updateuser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndUpdate(id, req.body);
    if (!user) {
      return res.status(500).json({ message: "NOT FOUND DATA!!" });
    }
    const update_user = await User.findById(id);

    res.status(200).json(update_user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
const Adduser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
module.exports = { Viewuser, Adduser, updateuser, deleteuser };
