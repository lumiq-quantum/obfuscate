FROM node:22

WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install -g @angular/cli
RUN npm install
RUN npm run build --prod
RUN npm i -g live-server
RUN mv ./dist /
RUN rm -r ./*
RUN mv /dist .
EXPOSE 8080
CMD ["live-server", "--port", "3000" ]
