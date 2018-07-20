FROM node:carbon
WORKDIR /usr/src/app

COPY package*.json ./
COPY . .

RUN npm install
RUN npm install -g serve
RUN npm run build

EXPOSE 5000

CMD [ "npm", "run", "start-prod" ]
