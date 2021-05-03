#!/bin/bash
pm2 delete jainam_jewellers 2> /dev/null || true
pm2 kill
cd src
yarn
yarn build
pm2 start --name "jainam_jewellers" npm -- run start --
pm2 save