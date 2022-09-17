import { model, Schema } from 'mongoose';
import { IList } from '../../../interfaces';

const listSchema: Schema<IList> = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    nextWatch: [
      {
        _id: false,
        id: {
          type: String,
          required: true,
        },
      },
    ],
    completed: [
      {
        _id: false,
        id: {
          type: String,
          required: true,
        },
      },
    ],
    inProgress: [
      {
        _id: false,
        id: {
          type: String,
          required: true,
        },
        currentEpisode: {
          type: String,
          required: false,
        },
      },
    ],
    dropped: [
      {
        _id: false,
        id: {
          type: String,
          required: true,
        },
        currentEpisode: {
          type: String,
          required: false,
        },
      },
    ],
    freeze: [
      {
        _id: false,
        id: {
          type: String,
          required: true,
        },
        currentEpisode: {
          type: String,
          required: false,
        },
      },
    ],
    topTen: [
      {
        _id: false,
        id: {
          type: String,
          required: true,
        },
      },
    ],
    favorites: [
      {
        _id: false,
        id: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
    versionKey: false,
  },
);

const List = model<IList>('List', listSchema);

export default List;
