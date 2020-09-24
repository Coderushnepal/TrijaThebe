import logger from "../utils/logger";
import * as loginModels from "../models/user";
import { hash, compare } from "../utils/crypt";
import { generateToken } from '../utils/jwt';
import * as user_sessions from '../models/user_sessions';
import BadRequestError from "../utils/BadRequestError";

/**
 * Create an user
 *
 * @param params
 */
export async function createUser(params) {
  const hashedPassword = hash(params.password);
  const existingUser = await loginModels.create({
  
    email: params.email,
    password: hashedPassword,
  });

  return {
    data: {
      existingUser,
    },
  };
}

/**
 * Verify login
 *
 * @param params
 */
export async function userLogin(params) {
  const { email, password } = params;
  const user = await loginModels.getUserCredentials({
    email,
    password
  });

  if (!user) {
    logger.error("Invalid Credentials");

    throw new BadRequestError("Invalid credentials");
  }

  const isPasswordValid = compare(password, user.password);
  if (!isPasswordValid) {
    logger.error("Invalid credentials");

    throw new BadRequestError("Invalid credentials");
  }

  const token = generateToken({
    id: user.id,
    email: user.email
  });

  await user_sessions.saveToken(user.id, token);

  user.password = undefined;

  return {
    data: {
      user,
      token
    },
    message: "Login Successful.",
  };
}