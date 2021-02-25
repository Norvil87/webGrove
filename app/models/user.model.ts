const mongoose = require("mongoose"); // can't use es5 modules for some reason

const User = mongoose.model("User", {
  username: String,
  email: String,
  password: String,
  progress: Map,
  roles: [{ type: mongoose.Schema.Types.ObjectId, ref: "Role" }],
});

export default User;
