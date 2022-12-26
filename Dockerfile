FROM node:17 as build

WORKDIR /app

COPY . ./
RUN npm install --legacy-peer-deps
RUN ./node_modules/.bin/gatsby build --prefix-paths

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*
COPY --from=build /app/public .
CMD ["nginx", "-g", "daemon off;"]
