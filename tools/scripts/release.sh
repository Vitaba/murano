#!/bin/bash
echo "Commit message"
GIT_COMMIT_DESC=$(git log --format=%B -n 1 $CIRCLE_BRANCH)
echo $GIT_COMMIT_DESC
if [[ ($GIT_COMMIT_DESC != *"Merge"*) && ($GIT_COMMIT_DESC != *"chore(bump):"*) ]]; then
GITHUB_EMAIL=rlxsebas@gmail.com
GITHUB_USERNAME=SebasG22
git config --global user.email $GITHUB_EMAIL
git config --global user.name $GITHUB_USERNAME
git remote rm origin
git remote add origin https://Vitaba:${GITHUB_TOKEN}@github.com/Vitaba/murano.git
git fetch origin --tags
git symbolic-ref HEAD refs/heads/${CIRCLE_BRANCH}
echo "👻 Current Branch $(git rev-parse --abbrev-ref HEAD)"
echo "👻 Circle Branch ${CIRCLE_BRANCH}"
git remote set-head origin $CIRCLE_BRANCH
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
    node_modules/.bin/release-it --no-git.requireUpstream --no-git.requireCleanWorkingDir --ci major;
    else 
    ./node_modules/.bin/release-it --no-git.requireUpstream --no-git.requireCleanWorkingDir --ci major --preRelease=$COMMIT_SCOPE;
    fi;
    ;;
'refactor'| 'test')
    echo "👉️ minor release"
    if  [ "$ENV" = "prod" ]; then node_modules/.bin/release-it --no-git.requireUpstream --no-git.requireCleanWorkingDir --ci minor;
    else 
    ./node_modules/.bin/release-it --no-git.requireUpstream --no-git.requireCleanWorkingDir --ci minor --preRelease=$COMMIT_SCOPE;
    fi;
    ;;    
*)
    echo "👉️ patch release";
    if  [ "$ENV" = "prod" ]; then
    ./node_modules/.bin/release-it --no-git.requireUpstream --no-git.requireCleanWorkingDir --ci patch;
    else 
    ./node_modules/.bin/release-it --no-git.requireUpstream --no-git.requireCleanWorkingDir --ci patch --preRelease=$COMMIT_SCOPE;
    fi;
    ;;
esac
git push origin HEAD
else
echo "No deployment"
fi;
