import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';
import mongoose from 'mongoose';
import database from './database';

import infoRoutes from './routes';

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
    this.app.use('/', infoRoutes);
  }
}

export default new App().app;
