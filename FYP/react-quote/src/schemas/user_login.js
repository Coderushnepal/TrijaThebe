import Joi from "joi";

const CREATE_USER_SCHEMA = Joi.object().keys({
  email: Joi.string().max(100).required(),
  password: Joi.string().min(8).max(30).required(),
});

export function validateUserCreation(req, res, next) {
  try {
    Joi.assert(req.body, CREATE_USER_SCHEMA);
    next();
  } catch (err) {
    next(err);
  }
}

const USER_LOGIN_SCHEMA = Joi.object().keys({
  email: Joi.string().max(100).required(),
  password: Joi.string().min(8).max(30).required(),
});

export function validateLogin(req, res, next) {
  try {
    Joi.assert(req.body, USER_LOGIN_SCHEMA);
    next();
  } catch (err) {
    next(err);
  }
}