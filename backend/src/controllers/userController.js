import User from '../models/User.js';

// @desc    Register a new user
// @route   POST /api/users/signup
export const signupUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ success: false, error: 'User already exists' });
    }

    const user = await User.create({
      name,
      email,
      password, // Note: Always hash secure passwords in raw production codes (e.g., bcrypt)
    });

    res.status(201).json({
      success: true,
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        currentRole: user.currentRole,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// @desc    Authenticate user login
// @route   POST /api/users/login
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');
    if (!user || user.password !== password) {
      return res.status(401).json({ success: false, error: 'Invalid credentials' });
    }

    res.status(200).json({
      success: true,
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        currentRole: user.currentRole,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// @desc    Get current user profile
// @route   GET /api/users/profile
export const getUserProfile = async (req, res) => {
  try {
    // Return sample mock logged-in user profile
    res.status(200).json({
      success: true,
      data: {
        name: 'Harsh Rajput',
        email: 'harshrajput2013@gmail.com',
        currentRole: 'Software Engineer',
        targetRole: 'Principal Cloud Architect',
        xp: 4850,
        skills: [
          { name: 'React Enterprise', status: 'qualified' },
          { name: 'Node REST Engines', status: 'qualified' },
          { name: 'AWS S3/Lambda', status: 'qualified' }
        ]
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
