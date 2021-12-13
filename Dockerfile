FROM node:16-alpine3.12

# /app 폴더를 WORKDIR로 설정
WORKDIR /usr/src/app

# 스크립트 실행을 위한 bash 설치
RUN apk add bash

# package 복사
COPY package.json ./
COPY yarn.lock ./


COPY . .

# package 설치
RUN yarn


# 실행할 명령어
ENTRYPOINT ["yarn", "start:debug"]