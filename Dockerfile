### STAGE 1: Build ###
FROM node:12.7-alpine AS build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build


### STAGE 2: Setup ###
FROM nginx:1.17.1-alpine
# Removing nginx default page.
RUN rm -rf /usr/share/nginx/html/*
# Copying nginx configuration.
COPY /nginx/default.conf /etc/nginx/conf.d/default.conf

# Copying openhome-panel source into web server root.
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
# Exposing ports.
EXPOSE 4200
# Starting server. ffff
CMD ["nginx", "-g", "daemon off;"]
