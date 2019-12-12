#!/bin/bash
echo //registry.npmjs.org/:_authToken=${NPM_TOKEN} > .npmrc
cat .npmrc
echo "Local Directory"
ls -la
echo "Home Directory"
ls -la $HOME
npm whoami