import { Request, Response } from 'express';

class infoController {
  infoApi(req: Request, res: Response) {
    try {
      return res.status(200).send({
        success: true,
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
      });
    } catch (err) {
      if (err instanceof Error) {
        return res.status(500).send({
          success: false,
          data: '',
          errors: [err.message],
        });
      }
    }
  }
}

export default new infoController();
