FROM node:latest
WORKDIR /app
#RUN git clone https://github.com/sarveshgeetha/vue.JS_D3.js_Node.js
#WORKDIR /app/vue.JS_D3.js_Node.js/backend
COPY . .
RUN npm install
EXPOSE 4000
CMD [ "npm", "start" ]