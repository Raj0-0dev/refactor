import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please add a valid email',
      ],
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
      minlength: 6,
      select: false, // hide passwords by default in responses
    },
    currentRole: {
      type: String,
      default: 'Developer',
    },
    targetRole: {
      type: String,
      default: 'Senior Solutions Architect',
    },
    skills: [
      {
        name: String,
        status: {
          type: String,
          enum: ['qualified', 'gap', 'in-progress'],
          default: 'qualified',
        },
      }
    ],
    xp: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('User', UserSchema);
