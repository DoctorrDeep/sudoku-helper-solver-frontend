FROM node:19-alpine3.16

WORKDIR /app

COPY package.json /app/
COPY package-lock.json /app/
COPY src /app/src/
COPY public /app/public/
COPY node_modules /app/node_modules/

RUN npm install

CMD ["npm", "start"]
