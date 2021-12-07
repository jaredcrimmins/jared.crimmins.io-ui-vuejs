# syntax=docker/dockerfile:1

FROM node:16.13.1

# Let scripts know that they are running in a continuous integration (CI) environment
ENV CI=true
ENV NODE_ENV=production

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY . .

RUN npm ci --production

EXPOSE 8080
CMD ["npm", "start"]
