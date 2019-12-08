# 
COMMIT_MESSAGE=$(git log -1 --pretty=format:'%s')
## https://stackoverflow.com/questions/19482123/extract-part-of-a-string-using-bash-cut-split
COMMIT_TYPE=${COMMIT_MESSAGE%(*}  # retain the part before the colon
COMMIT_SCOPE=${COMMIT_MESSAGE#*(}
COMMIT_SCOPE=${COMMIT_SCOPE%)*}

case "release" in
'release')
    ENV="prod";
    echo "Release for production 👌"
    ;;
*)
'pre-release')
    ENV="beta";
    COMMIT_SCOPE="rc"
    echo "Pre-release for production 👌"
    ;;
*)
echo 'default'
    ENV="beta"
    COMMIT_SCOPE="beta"
    echo "Release for beta 👌"
    ;;

esac

echo ${ENV}

case "$COMMIT_TYPE" in
'feat')
    echo "👉️ Major Release "
    if $ENV = "prod" then
    .node_modules/bin/release-it --ci major;
    else 
    .node_modules/bin/release-it --ci major --preRelease=COMMIT_SCOPE;
    fi;
    ;;
'refactor'| 'test')
    echo "👉️ minor release"
    if $ENV = "prod" then
    .node_modules/bin/release-it --ci minor;
    else 
    .node_modules/bin/release-it --ci minor --preRelease=COMMIT_SCOPE;
    fi;
    ;;    
'chore' | 'build' | 'fix' | 'style' | 'docs')
    echo "👉️ patch release"
    if $ENV = "prod" then
    .node_modules/bin/release-it --ci patch;
    else 
    .node_modules/bin/release-it --ci patch --preRelease=COMMIT_SCOPE;
    fi;
    ;;
esac

.node_modules/bin/nx affected --target=build --all;
.node_modules/bin/nx affected --target=deploy --all;