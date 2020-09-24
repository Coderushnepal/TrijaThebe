import logger from '../utils/logger';
import * as user_sessions from '../models/user_session';
import UnauthorizedError from '../utils/UnauthorizedError';

export async function verifyToken(userId, token) {
  if (!token) {
    logger.error(`No token provided`);

    throw new UnauthorizedError(`No token provided`);
  }

  const session = await user_sessions.get({
    userId,
    token,
    isActive: true
  });

  if (!session || (session && session.userId !== userId)) {
    logger.error(`Invalid token`);

    throw new UnauthorizedError(`Invalid token`);
  }
}