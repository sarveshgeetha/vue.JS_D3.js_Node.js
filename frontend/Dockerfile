FROM node:latest
WORKDIR /app
#RUN git clone https://github.com/sarveshgeetha/vue.JS_D3.js_Node.js
#WORKDIR /app/vue.JS_D3.js_Node.js/frontend
COPY . .
RUN npm install
RUN npm install -g http-server
RUN npm run build
EXPOSE 8080
CMD [ "http-server", "dist" ]