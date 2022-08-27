import mongoose, { Mongoose, Connection } from 'mongoose';

class Database {
  public database: Mongoose;

  public async getDatabase(mongoURL: string): Promise<Connection> {
    try {
      this.database = await mongoose.connect(mongoURL);

      return this.database.connection;
    } catch (e) {
      console.log(`Error: ${e}`);
    }
  }

  public async closeDatabase() {
    try {
      this.database.connection.close();
    } catch (e) {
      console.log(`Error: ${e}`);
    }
  }
}

export default new Database();
