FROM node:latest

WORKDIR /usr/src/app

COPY package.json .

RUN npm i --force && npm i -g serve 

COPY . .

RUN npm run build

CMD ["serve", "-s", "build"]