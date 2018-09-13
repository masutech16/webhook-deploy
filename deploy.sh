#!/bin/sh

# working directory
cd /home/isucon/app
git pull origin master
make
echo "$ROOT_PASSWORD" | sudo -S systemctl restart [service]
