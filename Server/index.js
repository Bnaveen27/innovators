const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const studentRoutes = require('./Routes/StudentRoutes');
const uploadRoutes = require('./Routes/UploadRoutes');

const InnovatorsModel = require('./models/Innovators');
const File = require('./models/FileModel');


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Create upload folders if they don't exist
const uploadFolders = [
  './uploads/images',
  './uploads/reports',
  './uploads/feedbacks',
  './uploads/invitations',
  './uploads/circulars',
  './uploads/participantLists', // New folder for participant lists
];

uploadFolders.forEach((folder) => {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }
});

// Connect to MongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/aac', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database Connected'))
  .catch((err) => console.error('Database connection error:', err));

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let folder = '';

    switch (file.fieldname) {
      case 'image':
        folder = './uploads/images';
        break;
      case 'report':
        folder = './uploads/reports';
        break;
      case 'feedback':
        folder = './uploads/feedbacks';
        break;
      case 'invitation':
        folder = './uploads/invitations';
        break;
      case 'circular':
        folder = './uploads/circulars';
        break;
      case 'participantList': // Case for participant list
        folder = './uploads/participantLists';
        break;
      default:
        folder = './uploads/others';
        break;
    }

    cb(null, folder);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Login API
app.post('/Pages/Login/Login', async (req, res) => {
  const { Username, password } = req.body;
  try {
    const user = await InnovatorsModel.findOne({ Username });
    if (user) {
      if (user.password === password) {
        res.json('Success');
      } else {
        res.json('The password is incorrect');
      }
    } else {
      res.json('No record existed');
    }
  } catch (err) {
    res.status(500).json({ message: 'Error during login', error: err.message });
  }
});

// Registration API
app.post('/Pages/Registration/Signup', async (req, res) => {
  try {
    const newInnovator = await InnovatorsModel.create(req.body);
    res.status(201).json(newInnovator);
  } catch (err) {
    res.status(500).json({ message: 'Error during registration', error: err.message });
  }
});

// Upload files API
app.post(
  '/Pages/UploadFiles/UploadFile',
  upload.fields([
    { name: 'image', maxCount: 10 },
    { name: 'report', maxCount: 5 },
    { name: 'feedback', maxCount: 5 },
    { name: 'invitation', maxCount: 5 },
    { name: 'circular', maxCount: 5 },
    { name: 'participantList', maxCount: 5 }, // Added participantList field
  ]),
  async (req, res) => {
    const { date } = req.body;

    const images = req.files['image'] ? req.files['image'].map((file) => file.filename) : [];
    const reports = req.files['report'] ? req.files['report'].map((file) => file.filename) : [];
    const feedbacks = req.files['feedback'] ? req.files['feedback'].map((file) => file.filename) : [];
    const invitations = req.files['invitation'] ? req.files['invitation'].map((file) => file.filename) : [];
    const circulars = req.files['circular'] ? req.files['circular'].map((file) => file.filename) : [];
    const participantLists = req.files['participantList'] ? req.files['participantList'].map((file) => file.filename) : []; // Save participant list files

    try {
      const newFile = new File({
        date,
        images,
        reports,
        feedbacks,
        invitations,
        circulars,
        participantLists, // Add participant list to the model
      });

      await newFile.save();
      res.status(201).json({ message: 'Files uploaded successfully', file: newFile });
    } catch (err) {
      res.status(500).json({ message: 'Error uploading files', error: err.message });
    }
  }
);

// Routes
app.use('/Routes/StudentRoutes', studentRoutes);
app.use('/Routes/UploadRoutes', uploadRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'Uploads')));



// Default Route
app.get('/', (req, res) => {
  res.send('Welcome to the AAC backend API');
});

// Start the server
app.listen(5000, () => {
  console.log('Server connected at http://localhost:5000');
});
