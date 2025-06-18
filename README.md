# ZeroTrace

| ![Status](https://img.shields.io/badge/status-stable-brightgreen?style=flat-square) | ![Platform](https://img.shields.io/badge/platform-web--based-lightgrey?style=flat-square) | ![Backend](https://img.shields.io/badge/backend-Node.js-339933?style=flat-square&logo=node.js&logoColor=white) | ![Frontend](https://img.shields.io/badge/frontend-HTML%2FCSS%2FJS-orange?style=flat-square&logo=javascript&logoColor=white) |
|---|---|---|---|

| ![Upload](https://img.shields.io/badge/upload-enabled-blueviolet?style=flat-square) | ![TerminalUI](https://img.shields.io/badge/interface-terminal-11111?style=flat-square) | ![MIT](https://img.shields.io/badge/security-sandboxed-critical?style=flat-square) | ![Version](https://img.shields.io/badge/version-1.0.0-blue?style=flat-square) | ![License](https://img.shields.io/badge/license-MIT-green?style=flat-square) |
|---|---|---|---|---|

|![ZerroTrace_github](https://github.com/user-attachments/assets/72c75c83-86b5-4cde-b91c-2abf64e44e8c)|
|---|

- **ZeroTrace** ist ein webbasiertes Hacker-Simulationsspiel mit:
  
- [x] Terminaloberfläche
- [x] Missionssystem
- [x] Toolfreischaltungen
- [x] Datei-Upload

<br>

---

<br>

> 🔧 Features

- 🎮 **Terminalbasierte Interaktion**
- 🧠 **Missionslogik & Toolfreischaltung** mit Levelsystem
- 📦 **Echter Datei-Upload** via Node.js + Multer (inkl. Speichern)
- 🕵️‍♂️ **Tools** wie `ddosSim`, `passCrack`, `logParse`, `stegoFind`
- ⚡ **Reputation- & Level-Anzeige**
- 🌐 **Browserbasiert – keine Installation nötig** (nur einmaliger Setup)
- 🧩 Erweiterbar durch externe Missionen (`missions.js`)

<br>

---

<br>

> 📁 Projektstruktur

```
ZeroTrace/
├── index.html        # Hauptinterface (Terminal)
├── js/
│ ├── coreEngine.js   # Spiel-Logik und Tool-Verhalten
│ └── missions.js     # Externe Missionsstruktur (optional)
├── style/
│ └── terminal.css    # Interface-Styling
├── uploads/          # Hochgeladene Dateien (wird automatisch erzeugt)
├── server.js         # Node.js Backend für Datei-Upload
└── ServerStart.bat   # Startskript für Frontend + Backend + Browser
```

<br>

---

<br>

> ⚙️ Systemvoraussetzungen

- **Node.js** (empfohlen: ≥ 18.x)
- **Python** (für lokalen Webserver – optional über Batch)
- **npm** für Paketverwaltung

<br>

---

<br>

> 📦 Abhängigkeiten

Installiere die Server-Komponenten im Projektverzeichnis:

```yarn
npm install express multer cors
```

|    Paket   |                    Zweck                     |
|    :---:   |                   :---:                      |
|            |                                              |
|   express  |            Webserver-Framework               |
|    multer  |         Datei-Upload-Verarbeitung            |
|     cors   |         Cross-Origin-Kommunikation           |

<br>

---

<br>

> 🚀 Startanleitung
  - Projekt klonen:

```yarn
git clone https://github.com/DEIN-GITHUB-NAME/ZeroTrace.git
cd ZeroTrace
```

<br>

> Abhängigkeiten installieren:

```yarn
npm install
```

<br>

Frontend & Backend starten:

- Variante A: Über Batch-Datei
  - (Doppelklick auf ServerStart.bat)

<br>

> Variante B: Manuell

- Starte Frontend (Port 8000)
  - python -m http.server 8000

- Starte Backend (Port 8080)
  - node server.js

<br>

> Spiel öffnen im Browser:

```yarn
http://localhost:8000
```

<br>

---

<br>

> 🧪 Spielstart & Befehle
  - Nach dem Öffnen der Seite, nutze folgende Kommandos im Terminal:

| **Befehl**        | **Funktion**                                        |
|-------------------|-----------------------------------------------------|
| `run`             | Startet das Spiel + zeigt die Netzwerk-Map         |
| `help`            | Zeigt alle verfügbaren Befehle                     |
| `clear`           | Leert die Terminal-Ausgabe                         |
| `unlock [tool]`   | Schaltet ein Tool frei (nach Passwortabfrage)      |
| `uploadFile`      | Startet den Datei-Upload (nach Freischaltung)      |
| `ddosSim`         | Simuliert einen DDoS-Angriff                       |
| `passCrack`       | Simuliert das Knacken eines Passworts              |
| `logParse`        | Analysiert Logdateien nach Sicherheitsereignissen  |
| `stegoFind`       | Führt eine Steganografie-Analyse auf Bildern aus   |
| `showMap`         | Zeigt das Netzwerk-Overlay (Quickref)              |

```yarn
bylickilabs
```

<br>

---

<br>

> 🎨 Optional: Branding
  - favicon.ico im Hauptverzeichnis platzieren (optional)
    - Alternativ: Neon-Hacker-Logo verwenden

<br>

---

<br>

🔐 Sicherheitshinweis
Dieses Projekt ist rein simulativ und dient ausschließlich der Visualisierung von IT-Szenarien.
Es enthält keine echten Hacking-Funktionen, sondern ist ein didaktisches Tool zur Veranschaulichung.


<br>

---

<br>

📜 Lizenz
MIT License [LICENSE](LICENSE)

<br>

---

<br>

Entwickelt von Thorsten Bylicki
powered by ✨BylickiLabs
