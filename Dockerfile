FROM node:latest

WORKDIR /frontend

COPY package.json .
COPY yarn.lock .

RUN yarn install && \
    yarn cache clean --force

COPY . .

CMD ["yarn", "dev"]
