import mongoose from "mongoose";
import userModel from "./user.model";
import roleModel from "./role.model";
//mongoose, (Promise = global.Promise);

const db: any = {};
db.mongoose = mongoose;
db.user = userModel;
db.role = roleModel;
db.ROLES = ["user", "admin", "moderator"];

export default db;
