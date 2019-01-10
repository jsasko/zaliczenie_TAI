'use strict';

import uniqueValidator from "mongoose-unique-validator";
import mongoose from 'mongoose';
import mongoConverter from "../service/mongoConverter";
import applicationException from "../service/applicationException";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  role: { type: String, enum: userRoles, default: userRole.user, required: false },
  active: { type: Boolean, default: true, required: false },
  isAdmin: { type: Boolean, default: false, required: false }
}, {
  collection: 'user'
});

const userRole = {
  admin: 'admin',
  user: 'user'
};

const userRoles = [userRole.admin, userRole.user];

userSchema.plugin(uniqueValidator);
const UserModel = mongoose.model('user', userSchema);

function createNewOrUpdate(data) {
  console.log(data);
  return Promise.resolve().then(() => {
    if (!data.id) {
      return new UserModel(data).save().then(result => {
        if (result[0]) {
          return mongoConverter(result[0]);
        }
      });
    } else {
      return UserModel.findByIdAndUpdate(data.id, _.omit(data, 'id'), {new: true});
    }
  }).catch(error => {
    if ('ValidationError' === error.name) {
      error = error.errors[Object.keys(error.errors)[0]];
      throw applicationException.new(applicationException.BAD_REQUEST, error.message);
    }
    throw error;
  });
}

export default {
  createNewOrUpdate: createNewOrUpdate,

  userRole: userRole,
  model: UserModel
};
