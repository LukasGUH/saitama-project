import { Request, Response } from 'express';
import { IResponse } from '../../interfaces';
import HTTPError from '../../errors';
import * as message from '../../utils';

class infoController {
  infoApi(req: Request, res: Response) {
    try {
      const response: IResponse = {
        success: true,
        messages: message.infoSuccess,
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
        errors: [],
      };

      return res.status(200).send(response);
    } catch (err) {
      if (err instanceof Error) {
        return res.send(new HTTPError(false, 500, [err.message]));
      }
    }
  }
}

export default new infoController();
