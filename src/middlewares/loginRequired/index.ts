import dotenv from 'dotenv';
dotenv.config();

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import HTTPError from '../../errors';
import * as message from '../../utils';

const loginRequired = (req: Request, res: Response, next: NextFunction) => {
  try {
    const [, token] = req.headers.authorization.split(' ');

    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (err) {
    if (err instanceof Error) {
      res.send(
        new HTTPError(false, message.middlewareFailed, 401, [err.message]),
      );
    }
  }
};

export default loginRequired;
