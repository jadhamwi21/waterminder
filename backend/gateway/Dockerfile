FROM nginx:latest

WORKDIR /etc/nginx

COPY nginx.conf .

WORKDIR /

EXPOSE 8000

CMD ["nginx", "-g", "daemon off;"]