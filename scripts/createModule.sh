#!/bin/bash

# Create new package directory and copy the template there
echo "Copying directory"
mkdir ./src/modules/$1
cp -r ./src/modules/Template/ ./src/modules/$1
mv ./src/modules/$1/Template.js ./src/modules/$1/$1.js

# Replace all "template" references to the name of the new module
echo "Replace 'template' strings"
find ./src/modules/$1/ -exec sed -i '' -e "s/Template/$1/g" {} \;

# Final message
echo " ------------------------------------------------------------------------------------------------------------------- "
echo "| Don't forget to add the new module to the navigation stack in src/Main.js and it's reducers in src/state/store.js |"
echo " ------------------------------------------------------------------------------------------------------------------- "
