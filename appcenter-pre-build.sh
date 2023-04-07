#!/usr/bin/env bash
# Creates an .env from existing env files for use with react-native-config 
# based on branch
if [  "$APPCENTER_BRANCH" == "master" ]; then
   cp .env.prod .env
else
   cp .env.prod .env
fi

printf "\n.env created with contents:\n"
cat .env
