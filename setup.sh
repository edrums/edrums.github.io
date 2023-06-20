#!/bin/bash

cd $PWD

set -e

script_name=$(basename $0 | sed "s/\.sh$//")

if [ "$1" == "--help" ] || [ "$1" == "-h" ]; then
	echo "Setup and run MKDocs"
	echo ""
	echo "Usage: ${script_name} [option]"
	echo ""
	echo "Options are not mandatory, only one at a time."
	echo "-a, --assets    Build minimized css style and js script from sources."
	echo "-i, --install   Install node modules using Yarn."
	echo ""
	exit 0
fi

# Install or update ruby and yarn packages
if [ "$1" == "-i" ] || [ "$1" == "--install" ]; then
	yarn --no-bin-links
	exit 0
fi

# Rebuild minimized assets
if [ ! -f "assets/css/style.min.css" ] || [ "$1" == "-a" ] || [ "$1" == "--assets" ]; then
	yarn dist
	exit 0
fi

mkdocs serve
