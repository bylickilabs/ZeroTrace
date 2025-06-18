@echo off
echo Starte ZeroTrace Server...

cd /d "%~dp0"

start cmd /k "echo Starte Frontend-Server auf Port 8000 && python -m http.server 8000"

start cmd /k "echo Starte Backend-Server auf Port 8080 && node server.js"

timeout /t 3 >nul
start http://localhost:8000

echo Server gestartet! Viel Erfolg mit ZeroTrace!
pause
