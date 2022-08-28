import dotenv from 'dotenv';
dotenv.config();

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { IResponse } from '../../interfaces';
import * as message from '../../utils';

const loginRequired = (req: Request, res: Response, next: NextFunction) => {
  try {
    const [, token] = req.headers.authorization.split(' ');

    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (err) {
    if (err instanceof Error) {
      const response: IResponse = {
        success: false,
        message: message.middlewareFailed,
        errors: [err.message],
      };

      res.status(401).send(response);
    }
  }
};

export default loginRequired;
