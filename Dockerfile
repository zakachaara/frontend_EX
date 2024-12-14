FROM node:23.0.0-alpine3.20 AS build
WORKDIR /app
COPY ["package.json", "package-lock.json", "./"]
RUN npm install 
COPY . .
EXPOSE 3000
RUN npm run build

FROM nginx:1.26.2-alpine
ENV BACKEND_URL="http://studnet-backend:8080"
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf.template /etc/nginx/templates/default.conf.template
RUN envsubst '$BACKEND_URL' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]