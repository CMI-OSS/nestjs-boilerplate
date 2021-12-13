#!/bin/bash

docker-compose \
    --env-file .env \
    -p {cbnu-alrami} \
    -f ./docker-compose/api/docker-compose.api.yml \
    -f ./docker-compose/mysql/docker-compose.mysql.yml \
    -f ./docker-compose/mongo/docker-compose.mongo.yml \
    up  $build --remove-orphans