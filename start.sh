#!/bin/bash

docker-compose \
    --env-file .env \
    -p {project} \
    -f ./docker-compose/docker-compose.api.yml \
    -f ./docker-compose/docker-compose.mysql.yml \
    -f ./docker-compose/docker-compose.mongo.yml \
    up -d $build --remove-orphans