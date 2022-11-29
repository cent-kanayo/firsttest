FROM nginx:1.17.10-alpine
RUN apk add nano && apk add curl
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY ./Nginx.conf /etc/nginx/conf.d
RUN rm -rf /url/share/nginx/html/index.html
COPY ./build /usr/share/nginx/html/
EXPOSE 80