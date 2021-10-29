#!/bin/bash
sudo su
cd /var/lib/jenkins/workspace/JainamJewellers
sudo rm -rf ./build
sudo yarn
sudo yarn build
sudo pm2 restart jainam_jewellers || sudo pm2 start --name "jainam_jewellers" npm -- run start --
sudo pm2 save --force