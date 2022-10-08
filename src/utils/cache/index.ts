import dotenv from 'dotenv';
dotenv.config();

import { RedisClientType, createClient } from 'redis';

class Cache {
  public client: RedisClientType;
  public redisURL = process.env.REDIS_URL;

  constructor() {
    this.client = createClient({
      url: this.redisURL,
    });
  }

  async connect() {
    await this.client.connect();
  }

  async get(key) {
    const value = await this.client.get(key);

    return value ? JSON.parse(value) : null;
  }

  set(key, value, timeExp) {
    return this.client.setEx(key, timeExp, JSON.stringify(value));
  }
}

export default new Cache();
