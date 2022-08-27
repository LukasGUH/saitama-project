import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';
import mongoose from 'mongoose';
import database from './database';

class App {
  public app: express.Application;
  public database: mongoose.Connection;

  constructor() {
    this.app = express();
    this.setupExpress();
    this.setupDatabase();
    this.setupRoutes();
  }

  private setupExpress(): void {
    this.app.use(urlencoded({ extended: true }));
    this.app.use(json());
    this.app.use(cors());
  }

  private async setupDatabase(): Promise<void> {
    this.database = await database.getDatabase(process.env.MONGO_URL);
  }

  private setupRoutes(): void {
    this.app.use('/', (req: express.Request, res: express.Response) => {
      res.status(200).send({
        success: true,
        data: {
          app: {
            name: 'saitama-project',
            version: '1.0.0',
            description:
              'saitama-project in node with expressjs and typescript',
            host: `localhost:${process.env.PORT}`,
            port: process.env.PORT,
            ready: 'true',
          },
        },
        errors: [],
      });
    });
  }
}

export default new App().app;
