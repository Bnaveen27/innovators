const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  date: { type: String, required: true },
  images: [{ type: String }],
  reports: [{ type: String }],
  feedbacks: [{ type: String }],
  invitations: [{ type: String }],
  circulars: [{ type: String }],
  participantLists: [{ type: String }], // New field
});

const File = mongoose.model('File', fileSchema);
module.exports = File;
