FROM Afx-Abu/Abu_ser:latest

RUN git clone https://github.com/wvfx-windro/Itachi /root/sana
WORKDIR /root/sana/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/wvfx-windro/Itachi

CMD ["node", "bot.js"]
