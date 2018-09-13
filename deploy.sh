#!/bin/sh

# working directory
cd /home/isucon/app
git pull origin master
make
sudo systemctl restart [service]
