const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

const UserEntity = model("User", UserSchema);

module.exports = UserEntity;
