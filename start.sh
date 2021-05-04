#!/bin/bash
cd src
sudo su
sudo yarn
yarn build
pm2 restart jainam_jewellers || pm2 start --name "jainam_jewellers" npm -- run start --
pm2 save --force