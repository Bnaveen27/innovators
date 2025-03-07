const express = require('express');
const multer = require('multer');
const path = require('path');
const { handleFileUpload, getRecords, updateRecord, deleteRecord, deleteFile ,downloadRecordsAsZip } = require('../Controllers/UploadController');
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let folder = '';
    switch (file.fieldname) {
      case 'image': folder = './Uploads/images'; break;
      case 'report': folder = './Uploads/reports'; break;
      case 'feedback': folder = './Uploads/feedbacks'; break;
      case 'invitation': folder = './Uploads/invitations'; break;
      case 'circular': folder = './Uploads/circulars'; break;
      case 'participantList': folder = './Uploads/participantLists'; break; 
      default: folder = './Uploads/others'; break;
    }
    cb(null, folder);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.post('/Pages/UploadFiles/UploadFile', upload.fields([
  { name: 'image', maxCount: 10 },
  { name: 'report', maxCount: 5 },
  { name: 'feedback', maxCount: 5 },
  { name: 'invitation', maxCount: 5 },
  { name: 'circular', maxCount: 5 },
  { name: 'participantList', maxCount: 5 }, 
]), handleFileUpload);

router.get('/Pages/GetRecords', getRecords);
router.put('/Pages/UpdateRecord/:id', updateRecord);
router.delete('/Pages/DeleteRecord/:id', deleteRecord);
router.get('/Pages/DownloadRecords/:date', downloadRecordsAsZip);
router.delete('/Pages/DeleteFile/:id/:fileType/:fileName', deleteFile);

module.exports = router;
