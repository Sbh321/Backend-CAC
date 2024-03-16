import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectID,
      ref: 'User',
    },
    subTodos: [
      //Array of sub todos
      {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'SubTodo',
      },
    ],
  },
  { timestamps: true }
);

export const Todo = new mongoose.model('Todo', todoSchema);
