@echo off
title Rakesh Magapu Portfolio
echo ===================================================
echo   Starting Rakesh Magapu Portfolio Local Server
echo ===================================================
echo.
cd /d "%~dp0"
echo Opening browser at http://localhost:5173/ ...
start http://localhost:5173/
echo Starting development server...
call npm run dev
pause
