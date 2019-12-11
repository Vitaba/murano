#!/bin/bash
# echo "👉️ minor release"
#     if [ "prod" = "prod" ]; then echo "equal";
#     else echo "not equal";fi;
echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ~/.npmrc
cd Vitaba/murano
GITHUB_EMAIL=rlxsebas@gmail.com
GITHUB_USERNAME=SebasG22
git config --global user.email $GITHUB_EMAIL
git config --global user.name $GITHUB_USERNAME
git remote rm origin
git remote add origin https://Vitaba:${GITHUB_TOKEN}@github.com/Vitaba/murano.git
git fetch origin
git symbolic-ref HEAD refs/heads/${TRAVIS_BRANCH}
echo "👻 Current Branch"
echo $(git rev-parse --abbrev-ref HEAD)
echo "👻 Travis Branch"
echo ${TRAVIS_BRANCH}
git remote set-head origin TRAVIS_BRANCH
yarn install --network-timeout 1000000 --frozen-lockfile
yarn global add firebase-tools
echo "👻 Building libraries for release"
node_modules/.bin/nx affected:build --all
echo "👻 Building apps for release"
node_modules/.bin/nx affected --target=package --configuration=production --all --parallel 

COMMIT_MESSAGE=$(git log -1 --pretty=format:'%s')
## https://stackoverflow.com/questions/19482123/extract-part-of-a-string-using-bash-cut-split
COMMIT_TYPE=${COMMIT_MESSAGE%(*}  # retain the part before the colon
COMMIT_SCOPE=${COMMIT_MESSAGE#*(}
COMMIT_SCOPE=${COMMIT_SCOPE%)*}
# Based on feat(release): adding new feature
case "${COMMIT_SCOPE}" in
'release')
    ENV="prod";
    echo "Release for production 👌"
    ;;
'pre-release')
    ENV="beta";
    COMMIT_SCOPE="rc"
    echo "Pre-release for production 👌"
    ;;
*)
    ENV="beta";
    COMMIT_SCOPE="beta";
    echo "Release for beta 👌"
    ;;

esac

case "$COMMIT_TYPE" in
'feat')
    echo "👉️ Major Release "
    if [ "$ENV" = "prod" ]; then
    node_modules/.bin/release-it --no-git.requireUpstream --ci major;
    else 
    ./node_modules/.bin/release-it --no-git.requireUpstream --ci major --preRelease=$COMMIT_SCOPE;
    fi;
    ;;
'refactor'| 'test')
    echo "👉️ minor release"
    if  [ "$ENV" = "prod" ]; then node_modules/.bin/release-it --no-git.requireUpstream --ci minor;
    else 
    ./node_modules/.bin/release-it --no-git.requireUpstream --ci minor --preRelease=$COMMIT_SCOPE;
    fi;
    ;;    
*)
    echo "👉️ patch release";
    if  [ "$ENV" = "prod" ]; then
    ./node_modules/.bin/release-it --no-git.requireUpstream --ci patch;
    else 
    ./node_modules/.bin/release-it --no-git.requireUpstream --ci patch --preRelease=$COMMIT_SCOPE;
    fi;
    ;;
esac

git push origin HEAD
firebase deploy --only hosting:$ENV --non-interactive --token "$FIREBASE_TOKEN";
./node_modules/.bin/nx affected --target=deploy --all --parallel

