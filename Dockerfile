FROM node:latest

COPY . ./library-frontend

WORKDIR ./library-frontend

RUN npm install

CMD ["npm","start"]

