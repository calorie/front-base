FROM node:12.16.1-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json yarn.lock ./
RUN yarn install
COPY . /app
RUN yarn build

FROM nginx:1.16.1-alpine
COPY --from=build /app/public /usr/share/nginx/html
COPY ./dockerfiles/nginx/default.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
