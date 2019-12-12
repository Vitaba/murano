#!/bin/bash
echo //registry.npmjs.org/:_authToken=${NPM_TOKEN} > .npmrc
cat .npmrc
ls -la
npm whoami