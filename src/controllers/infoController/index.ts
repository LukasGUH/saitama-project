import { Request, Response } from 'express';
import { IResponse } from '../../interfaces';
import { HTTPError, HTTPHandler } from '../../errors';

class infoController {
  public infoApi(req: Request, res: Response) {
    try {
      const response: IResponse = {
        success: true,
        status: 200,
        data: {
          app: {
            name: 'saitama-project',
            version:
              require('../../../package.json').version || process.env.VERSION,
            description:
              'saitama-project in node with expressjs and typescript',
            host: `localhost:${process.env.PORT}`,
            port: process.env.PORT,
          },
        },
      };

      return res.json(new HTTPHandler(response));
    } catch (err) {
      if (err instanceof Error) {
        return res.send(new HTTPError(false, 500, [err.message]));
      }
    }
  }
}

export default new infoController();
