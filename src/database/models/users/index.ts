import { model, Schema, SchemaTypes } from 'mongoose';
import { IUser } from '../../../interfaces';

const userSchema: Schema<IUser> = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    nickName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    favorites: [
      {
        type: String,
        required: false,
      },
    ],
    lists: {
      type: SchemaTypes.Mixed,
      required: false,
      default: {
        nextWatch: [],
        completed: [],
        inProgress: [],
        dropped: [],
        topTen: [],
      },
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
    versionKey: false,
  },
);

const User = model<IUser>('User', userSchema);

export default User;
