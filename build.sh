#/usr/bin/bash

# variables
PKG_NAME=`node -p "require('./package.json').name"` 
PKG_VERSION=`node -p "require('./package.json').version"`  
PKG_DESC=`node -p "require('./package.json').description"`  
NAME=${PKG_NAME}_${PKG_VERSION}

# creating dir
rm -rf sakam release
mkdir sakam release

# install pkg
if [ "$(pkg -v)" = '' ]; 
then 
    echo 'Error: pkg is not installed.'
    npm i -g pkg
fi

# build linux binary 
echo "Building Linux binary"
pkg -t node14-linux ./main.js --compress GZip --output ./sakam/sakam
tar -czvf ./release/${NAME}_linux.tar.gz ./sakam/sakam

# build deb packages
echo "Building deb packages"
mkdir -p ./sakam/${NAME}/DEBIAN
mkdir -p ./sakam/${NAME}/usr/local/bin/
cp ./sakam/sakam ./sakam/${NAME}/usr/local/bin/sakam
cat << __EOF__ > ./sakam/$NAME/DEBIAN/control
Package: $PKG_NAME
Version: $PKG_VERSION
Section: custom
Priority: optional
Architecture: all
Essential: no
Description: $PKG_DESC
__EOF__
dpkg-deb --build ./sakam/${NAME}
mv ./sakam/${NAME}.deb ./release/${NAME}.deb


# build windows binary
echo "Building windows binary"
pkg -t node14-win ./main.js --compress GZip --output ./sakam/sakam.exe
zip -r -Z bzip2 ./release/${NAME}_windows.zip . -i ./sakam/sakam.exe

# build macos binary
echo "Building macos binary"
pkg -t node14-mac ./main.js --compress GZip --output ./sakam/sakam
zip -r -Z bzip2 ./release/${NAME}-macos.zip . -i ./sakam/sakam