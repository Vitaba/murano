#!/bin/bash
nvm install 12
nvm use 12
yarn install --network-timeout 1000000 --frozen-lockfile
echo "👻 Building libraries for release"
node_modules/.bin/nx affected:build --all
./node_modules/.bin/nx affected --target=deploy --all --parallel
