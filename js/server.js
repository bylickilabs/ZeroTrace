const express = require('express');
const multer = require('multer');
const path = require('path');

// Erstelle einen Express-Server
const app = express();
const port = 8000;

// Setze den Speicherort und Dateinamen für die hochgeladenen Dateien
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');  // Speichert die Dateien im 'uploads' Ordner
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));  // Verwendet einen einzigartigen Dateinamen
  }
});

const upload = multer({ storage: storage });

// Erstelle den Upload-Endpunkt
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'Keine Datei ausgewählt.' });
  }

  // Datei wurde erfolgreich hochgeladen
  res.status(200).json({ success: true, message: 'Datei erfolgreich hochgeladen.' });
});

// Stelle sicher, dass der Upload-Ordner existiert
const fs = require('fs');
const uploadsDir = './uploads';
if (!fs.existsSync(uploadsDir)){
    fs.mkdirSync(uploadsDir);
}

// Starte den Server
app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});