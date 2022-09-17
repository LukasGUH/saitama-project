import dotenv from 'dotenv';
dotenv.config();

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { IResponse, IUserPayload } from '../../interfaces';
import { User } from '../../database/models';
import { HTTPError, HTTPHandler } from '../../errors';

const loginRequired = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const { nickName } = jwt.verify(
      token,
      process.env.JWT_SECRET,
    ) as IUserPayload;

    const user = await User.findOne({ nickName: nickName });

    if (!user) {
      const response: IResponse = {
        success: false,
        status: 401,
      };

      return res.json(new HTTPHandler(response));
    }

    req.user = user;

    return next();
  } catch (err) {
    if (err instanceof Error) {
      res.json(new HTTPError(false, 401, [err.message]));
    }
  }
};

export default loginRequired;
