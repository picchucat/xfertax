FROM nginx:stable
ADD css /usr/share/nginx/html
ADD js /usr/share/nginx/html
ADD index.html /usr/share/nginx.html
