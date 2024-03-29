FROM node

WORKDIR /language-translator

COPY . .

RUN npm install

CMD [ "npm", "start" ]

EXPOSE 3000
