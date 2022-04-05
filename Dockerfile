FROM node AS build

WORKDIR /temp
COPY ./packages/client/. .

RUN yarn install && yarn cache clean 

RUN yarn build

FROM nginx

WORKDIR /app

COPY --from=build /temp/dist/. /app/html/

COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
