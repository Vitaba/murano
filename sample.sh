#!/bin/bash
echo "Circle SHA $CIRCLE_SHA1"
if [ -z ${CIRCLE_PULL_REQUEST+x} ] ; then
IS_PR=false
else
IS_PR=true
fi;
echo "IS PR $IS_PR"  
echo 'TASKS=$(node ./tools/scripts/calculate-commands.js $IS_PR $CIRCLE_SHA1)'
echo "Tasks defined : $TASKS"