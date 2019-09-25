FROM node:10

WORKDIR /profile_crawler_front

COPY . /profile_crawler_front

RUN yarn global add @quasar/cli && \
    yarn install

RUN chmod +x ./script/start.sh

CMD ["sh", "./script/start.sh"]
