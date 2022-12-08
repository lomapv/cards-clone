FROM ubuntu

WORKDIR /usr/cardsClone

RUN apt-get update -y

RUN apt-get install wget -y

RUN wget https://nodejs.org/dist/v18.12.1/node-v18.12.1-linux-x64.tar.xz

RUN tar xf node-v18.12.1-linux-x64.tar.xz --strip-components=2 -C /

RUN rm node-v18.12.1-linux-x64.tar.xz

run apt-get update -y

COPY . .


RUN npm install
RUN npm run build

# ENV nome=valor \
# nome2=valo2
# Conforme os padrões do READ<

ENV DATABASE_URL="postgresql://projeto1:5J3TPax1a5o@192.168.0.111:5432/power" \ 
    REDIS_HOST="172.18.0.20" \
    REDIS_PASSWD="rYh^24U84U&2" \ 
    POWERAPITOKEN="VRQ0SMbbAO3I1btg7VHFtVaV9tfznOBgRpiMuVdLvAOScUutgSiAd7llufe6rbznu8faET74pqEmk5fW1Wv6i6b6AjvqonTao2Ff8R7smprZ0wFPe37UGCUbML9joMiAjz2GcUfCe5w15I59xf7y7eqnGrjQeKroGFV0j4plPvtSjtJ9A2JoLCCYQaWIpQPcsmmnYMIV8lXANcg27O4ncYBF"

CMD npm start