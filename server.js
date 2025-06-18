const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 8080; 

app.use(cors()); // 🔥 CORS aktivieren, sehr wichtig!

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'Keine Datei ausgewählt.' });
  }
  res.status(200).json({ success: true, message: 'Datei erfolgreich hochgeladen.' });
});

if (!fs.existsSync('./uploads')) {
  fs.mkdirSync('./uploads');
}

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
