// importing packages
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import passport from "passport";
import { isEmpty } from "lodash";

// models
import model from "../models/user.model";
// utils
import response from "../utils/response";

// catching errors
import catchError from "../utils/catchError";

// secret key for jwt
import { secret } from "../configs/secretKey";
import userModel from "../models/user.model";

const controller = {};

//  user signin control -------------------------------------------
controller.signup = catchError(async (req, res, next) => {
  if (!!req.validationErr)
    return response(res, null, req.validationErr, true, 400);
  let hashed_password = await bcrypt.hash(req.body.password, 5);
  let userData = { ...req.body, password: hashed_password };
  const user = new model(userData);
  const data = await user.save();

  response(res, data, "register successful", false, 200);
});

// user login control --------------------------------------------
controller.login = (req, res, next) => {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err || !user)
      return response(res, null, "Credentials incorrect", true, 404);

    req.login(user, { session: false }, (err) => {
      if (err) return next(err);

      // generate a signed json web token with the contents of user object and return it in the response
      const { name, email, _id } = user;
      const token = jwt.sign({ name, email, _id }, secret);
      //  return res.json({user, token});
      response(res, { user, token }, "Login Successful", false, 200);
    });
  })(req, res);
};

// user profile update --------------------------------------------------------------------
controller.profile = catchError(async (req, res, next) => {
  let user;

  if (!isEmpty(req.fields)) {
    let { name, email, password } = req.fields;

    user = await userModel.findByIdAndUpdate(
      req.user._id,
      { $set: { name, email, password } },
      { new: true, useFindAndModify: false }
    );
  }

  if (!!req.imgUrl) {
    user = await userModel.findByIdAndUpdate(
      req.user._id,
      { $set: { img: req.imgUrl } },
      { new: true, useFindAndModify: false }
    );
  }

  if (!user) return response(res, null, "invalid data", true, 404);
  response(res, user, "profile update successful", false, 200);
});

export default controller;
