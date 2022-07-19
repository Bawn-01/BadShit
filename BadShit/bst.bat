@echo off

cd src

:x

set /p inp=Wish to Continue? (y/n)

if %inp%==y (echo restarting)
if %inp%==n (EXIT /b)

lua54 main.lua
node index.js



goto x
