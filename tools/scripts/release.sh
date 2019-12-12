#!/bin/bash
cat <<EOF
$NPM_USER
$NPM_PASS
$NPM_EMAIL
EOF | npm adduser
cat $HOME/.npmrc
npm whoami
yarn install --network-timeout 1000000 --frozen-lockfile
echo "👻 Building libraries for release"
node_modules/.bin/nx affected:build --all
npm whoami
./node_modules/.bin/nx affected --target=deploy --all --parallel

