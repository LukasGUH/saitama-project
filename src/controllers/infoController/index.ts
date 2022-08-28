import { Request, Response } from 'express';
import { IResponse } from '../../interfaces';
import * as message from '../../utils';

class infoController {
  infoApi(req: Request, res: Response) {
    try {
      const response: IResponse = {
        success: true,
        message: message.infoSuccess,
        data: {
          app: {
            name: 'saitama-project',
            version: process.env.VERSION,
            description:
              'saitama-project in node with expressjs and typescript',
            host: `localhost:${process.env.PORT}`,
            port: process.env.PORT,
            ready: 'true',
          },
        },
        errors: [],
      };

      return res.status(200).send(response);
    } catch (err) {
      if (err instanceof Error) {
        const response: IResponse = {
          success: false,
          message: message.infoFailed,
          errors: [err.message],
        };

        return res.status(500).send(response);
      }
    }
  }
}

export default new infoController();
