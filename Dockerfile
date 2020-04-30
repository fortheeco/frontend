# ### STAGE 1: Build ###
# FROM node:12.7-alpine AS build
# WORKDIR /usr/src/app
# COPY package.json ./
# RUN npm install
# RUN npm install @angular/cli

# COPY . .
# RUN npm run build


# ### STAGE 2: Setup ###
# FROM nginx:1.17.1-alpine
# # Removing nginx default page.
# RUN rm -rf /usr/share/nginx/html/*
# # Copying nginx configuration.
# COPY /nginx/default.conf /etc/nginx/conf.d/default.conf

# # Copying openhome-panel source into web server root.
# COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
# # Exposing ports.
# EXPOSE 4200
# # Starting server. ffff
# CMD ["nginx", "-g", "daemon off;"]

# base image
FROM node as builder

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

RUN npm install -g @angular/cli@7.3.10

# Copy source code
COPY ./ ./

RUN npm install

RUN npm rebuild node-sass

# Create production application
RUN npm run prod

# Use nginx to serve application
FROM nginx:alpine

# expose port
EXPOSE 4200

# copy default.conf file
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy ready prod file
COPY --from=builder /app/output/dist /usr/share/nginx/html
