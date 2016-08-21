FROM node:argon

RUN mkdir /react-app

WORKDIR /react-app

COPY package.json /react-app

RUN npm install

COPY . /react-app

EXPOSE 3000

CMD ["npm", "start"]
