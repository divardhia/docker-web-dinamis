FROM node:14

RUN mkdir -p /backend
WORKDIR /backend
COPY package*.json /backend/

RUN npm install
COPY . .
EXPOSE 4000

CMD [ "node", "index.js" ]