FROM node:16.16.0-alpine as builder
WORKDIR /opt/app
RUN yarn global add pm2
COPY package.json .
RUN  yarn install --production=true && \
    rm -rf /usr/local/share/.cache/
COPY  . .
RUN yarn build 
CMD pm2-runtime  start yarn --name "nextjs" --interpreter sh -- start

