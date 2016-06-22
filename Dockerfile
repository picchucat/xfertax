FROM nginx:stable
RUN rm /usr/share/nginx/html/index*
ADD ./ /usr/share/nginx/html
