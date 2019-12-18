#!/bin/bash
echo "Current commit message"
GIT_COMMIT_DESC=git log --format=%B -n 1 $CIRCLE_BRANCH
echo $GIT_COMMIT_DESC
if [[ ($GIT_COMMIT_DESC != *"Merge"*) && ($GIT_COMMIT_DESC != *"chore(bump):"*) ]]; then
GENERATE_RELEASE=true;
echo "not contains chore(bump) or merge commit";
circleci-agent step halt;
else
GENERATE_RELEASE=false;
echo "contains chore(bump) or merge commit";
fi;