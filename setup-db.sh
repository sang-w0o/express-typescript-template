#!/bin/bash

set -e

# save current directory(pwd) to PWD
PWD=$(pwd)

docker run -p 3306:3306 \
-v $PWD/database-setup:/docker-entrypoint-initdb.d --name local-mysql \
-e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=dbname -d mysql \
--default-authentication-plugin=mysql_native_password \
-h 127.0.0.1
