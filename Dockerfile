FROM node:18-alpine
ADD . /app
WORKDIR /app
#VOLUME /app/src/config
ENV CLIENT_ID=YOUR_CLIENT_ID
ENV TENANT_ID=YOUR_TENANT_ID
RUN npm install dotenv
RUN npm install 
EXPOSE 3000
CMD ["npm", "start"]