const File = require('../models/FileModel');
const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

exports.handleFileUpload = async (req, res) => {
  const { date } = req.body;

  const images = req.files['image'] ? req.files['image'].map((file) => file.filename) : [];
  const reports = req.files['report'] ? req.files['report'].map((file) => file.filename) : [];
  const feedbacks = req.files['feedback'] ? req.files['feedback'].map((file) => file.filename) : [];
  const invitations = req.files['invitation'] ? req.files['invitation'].map((file) => file.filename) : [];
  const circulars = req.files['circular'] ? req.files['circular'].map((file) => file.filename) : [];
  const participantLists = req.files['participantList'] ? req.files['participantList'].map((file) => file.filename) : [];

  try {
    const newFile = new File({
      date,
      images,
      reports,
      feedbacks,
      invitations,
      circulars,
      participantLists, 
    });

    await newFile.save();
    res.status(201).json({ message: 'Files uploaded successfully', file: newFile });
  } catch (err) {
    res.status(500).json({ message: 'Error uploading files', error: err.message });
  }
};



exports.downloadRecordsAsZip = async (req, res) => {
  const { date } = req.params;

  try {
    const records = await File.find({ date });
    if (!records || records.length === 0) {
      return res.status(404).json({ message: 'No records found for the specified date' });
    }

    const zip = archiver('zip', { zlib: { level: 9 } });

    res.attachment(`records-${date}.zip`);

    zip.on('error', (err) => {
      console.error('Error creating ZIP file:', err.message);
      res.status(500).json({ message: 'Error creating ZIP file', error: err.message });
    });

    zip.pipe(res);

    for (const record of records) {
      const fileTypes = ['images', 'reports', 'feedbacks', 'invitations', 'circulars', 'participantLists'];

      for (const type of fileTypes) {
        for (const file of record[type]) {
          const filePath = path.join(__dirname, `../uploads/${type}/${file}`);
          if (fs.existsSync(filePath)) {
            zip.file(filePath, { name: `${type}/${file}` });
          } else {
            console.warn(`File not found: ${filePath}`);
          }
        }
      }
    }

    await zip.finalize();
  } catch (err) {
    console.error('Error downloading records:', err.message);
    res.status(500).json({ message: 'Error downloading records', error: err.message });
  }
};

exports.getRecords = async (req, res) => {
  try {
    const records = await File.find().sort({ date: 1 }); 
    res.status(200).json({ records });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching records', error: err.message });
  }
};


exports.updateRecord = async (req, res) => {
  const { id } = req.params;
  const { date } = req.body;

  try {
    const updatedRecord = await File.findByIdAndUpdate(id, { date }, { new: true });
    res.status(200).json({ message: 'Record updated successfully', updatedRecord });
  } catch (err) {
    res.status(500).json({ message: 'Error updating record', error: err.message });
  }
};


exports.deleteRecord = async (req, res) => {
  const { id } = req.params;

  try {
    const record = await File.findById(id);
    if (record) {
      
      await deleteFiles(record);
    }

    await File.findByIdAndDelete(id);
    res.status(200).json({ message: 'Record deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting record', error: err.message });
  }
};


exports.deleteFile = async (req, res) => {
  const { id, fileType, fileName } = req.params;

  try {
    const record = await File.findById(id);

    if (record) {
      if (!record[fileType] || !record[fileType].includes(fileName)) {
        return res.status(404).json({ message: `${fileType} file not found` });
      }

      record[fileType] = record[fileType].filter((file) => file !== fileName);
      await record.save();

      const filePath = path.join(__dirname, `../uploads/${fileType}/${fileName}`);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      } else {
        console.warn(`File not found for deletion: ${filePath}`);
      }

      res.status(200).json({ message: `${fileType} file deleted successfully` });
    } else {
      res.status(404).json({ message: 'Record not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error deleting file', error: err.message });
  }
};


const deleteFiles = async (record) => {
  const fileTypes = ['images', 'reports', 'feedbacks', 'invitations', 'circulars','participantLists'];

  for (const type of fileTypes) {
    for (const file of record[type]) {
      const filePath = path.join(__dirname, `../uploads/${type}/${file}`);
      fs.unlinkSync(filePath);
    }
  }
};
