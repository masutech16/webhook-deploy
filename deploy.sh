#!/bin/sh

# working directory
cd /home/isucon/app
git pull origin master
make
systemctl restart [service]