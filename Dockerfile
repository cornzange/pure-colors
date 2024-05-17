FROM mhart/alpine-node:16.4.2

WORKDIR /app

EXPOSE 3000

COPY . ./

RUN npm install

CMD ["sh", "-c", "npm run start"]