FROM node:12.18.4

WORKDIR usr/src/app/react-ts

RUN mkdir -p usr/src/app/react-ts && npm install -g --force yarn 

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 80

CMD [ "yarn", "start" ]