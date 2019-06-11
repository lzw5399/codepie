FROM node:slim

RUN mkdir /app

COPY ./deploy/server.js /app/server.js

COPY ./dist /app/dist

WORKDIR /app

RUN echo '{}' > package.json

RUN npm install express --save

RUN npm install connect-history-api-fallback --save

RUN npm install helmet --save

EXPOSE 8090

ENTRYPOINT ["node", "server.js"]