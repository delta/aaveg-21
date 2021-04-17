FROM node:latest

WORKDIR /usr/src/app

COPY . .

RUN cd client && npm i && npm run build && cd - 
RUN cd server && npm i && cd -

WORKDIR /usr/src/app/server

CMD [ "npm", "run", "prod" ]


