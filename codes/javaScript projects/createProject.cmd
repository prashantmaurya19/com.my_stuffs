@echo off 
rem this @ use with echo off

echo "Your Project is created seccessfully"

mkdir %1%

cd "%1%"


type  null > %1%.html 
type  null  > %1%.css
type  null  > %1%.js