rm -rf build
echo "Building All Libraries..."
echo ./node_modules/.bin/nx affected:build --all --parallel 
echo "Vitaba libraries available at dist/libs:"
ls dist/libs
