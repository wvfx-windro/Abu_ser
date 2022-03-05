FROM fusuf/whatsasena:latest

RUN git clone https://github.com/wvfx-windro/Itachi /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/wvfx-windro/sana-media

CMD ["node", "bot.js"]
