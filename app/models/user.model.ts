const mongoose = require("mongoose");

const User = mongoose.model("User", {
  username: String,
  email: String,
  password: String,
  roles: [{ type: mongoose.Schema.Types.ObjectId, ref: "Role" }],
});

export default User;
