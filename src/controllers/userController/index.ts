import { Request, Response } from 'express';
import { IResponse, IUser } from '../../interfaces';
import { HTTPError, HTTPHandler } from '../../errors';

import { UserServices } from '../../services';

class UserController {
  public async SignUp(req: Request, res: Response) {
    try {
      const user: IUser = req.body;
      const response: IResponse = await UserServices.SignUp(user);

      return res.json(new HTTPHandler(response));
    } catch (err) {
      if (err instanceof Error) {
        return res.json(new HTTPError(false, 500, [err.message]));
      }
    }
  }

  public async SignIn(req: Request, res: Response) {
    try {
      const user: IUser = req.body;
      const response: IResponse = await UserServices.SignIn(user);

      return res.json(new HTTPHandler(response));
    } catch (err) {
      if (err instanceof Error) {
        return res.json(new HTTPError(false, 500, [err.message]));
      }
    }
  }

  public async RefreshToken(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const response: IResponse = await UserServices.RefreshToken(id);

      return res.json(new HTTPHandler(response));
    } catch (err) {
      if (err instanceof Error) {
        return res.json(new HTTPError(false, 500, [err.message]));
      }
    }
  }
}

export default new UserController();
