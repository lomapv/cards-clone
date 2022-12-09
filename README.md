
# Clone dos CARDS

Esse projeto tem como objetivo salvar os cards da power, com o primeiro status, sem modificar nenhuma vez.

## Stack utilizada

**Robo:** Node, Prisma ORM, PostgreSQL, Docker.


## Instalação

Para fazer a intalação sera necessario:
- [PostgreSQL](https://www.postgresql.org/)
- [Node.JS](https://nodejs.org/)

Após a instalação de tudo isso sera necessario clonar o projeto do GitHub.

```bash
  git clone <link_projeto>
  cd <dir_projeto>
  npm install 
```
- para rodar o codigo no ambiente de desenvolvimento será necessario criar um arquivo .env, com os seguintes itens.

```
DATABASE_URL="<database-url>"
REDIS_HOST="<redis-link>"
REDIS_PASSWD="<redis-pass>"
POWERAPITOKEN="<token-power>"
```
Caso não vá usar no ambiente de desenvolvimento você devera criar essas mesmas variaveis no ambiente que você ira utilizar.

- para gerar o banco de dados so digitar no terminal:
```bash
npx prisma generate
npx prisma migrate
```

- para rodar em desenvolvimento e fazer modificações

```bash
npm run dev
```

- para criar a versão de produção e executar

```bash
npm run build
npm start
```

- Será necessario criar o usuário no banco de dados (PostgreSQL):

conecte no ADM do banco de dados e digite, esse usuario so terá as permissões necessarias.


```bash
create role <username>;
alter role <username> with login;
alter role <username> with encrypted password '<password>';
grant insert on "CardID" to <username>;

```

## Deploy

Para fazer o deploy normal será somente necessario executar a instalação

```bash
    git clone <link_projeto>
    cd <dir_projeto>
    npm install
    npm run build
    npm start
```

Pronto seu projeto já estará feito e concluido corretamente,

Caso queira utilizar o docker.

- será necessario criar uma rede no docker. (Esse tutorial foi feito considerando que você já tenha o docker instalado e que esteja usando uma distro baseado em Linux).

```bash
    sudo docker create network -d bridge --ip-range 172.18.0.0/16 coagnet
```
- E após criar um container que utilize a porta 6379, com uma instancia do Redis e configurar.
```bash
    sudo docker run -it -d --net coagnet --restart unless-stopped -p 6379:6379 redis
    sudo docker ps
    # vizualize o container ID.
    sudo docker exec -it <container_id> bash
    
    # após aberto a bash

    redis-cli

    # após aberto a cli

    config set requirepass '<redis_pass>'
    config set maxmemory 5gb
    exit
    
    # entre novamente na CLI.

    redis_cli

    # E verifique se exige a autenticação e so o maximo de memoria esta correto

    flushdb

    # caso de uma mensagem de erro sobre autenticação a 
    # autenticação foi feita corretamente
    # para autenticar so usar o comando auth com a senha

    auth <redis_pass>;

    # e vamos ver a memoria

    config get maxmemory

    # vai retornar um valor em KB.


```

- Após isso será necessario entrar no arquivo do seu projeto e executar o seguinte comando

```bash
    sudo docker build coagproject/container .
    sudo docker run -it -d --net coagnet --restart unless-stopped coagproject/container
```
- Caso o servidor tenha reiniciado

```bash
 sudo docker ps
    # vizualize o container ID.
    sudo docker exec -it <container_id> bash
    
    # após aberto a bash

    redis-cli

    # após aberto a cli

    config set requirepass '<redis_pass>'
    config set maxmemory 5gb
    exit
    
    # entre novamente na CLI.

    redis_cli

    # E verifique se exige a autenticação e so o maximo de memoria esta correto

    flushdb

    # caso de uma mensagem de erro sobre autenticação a 
    # autenticação foi feita corretamente
    # para autenticar so usar o comando auth com a senha

    auth <redis_pass>;

    # e vamos ver a memoria

    config get maxmemory

    # vai retornar um valor em KB.

```

##  Features

- Fazer com que não sejá necessario uma mini manutenção no DB redis, caso haja apagão.
- Arrumar os horarios pra que eles fiquem com o valor exato do Card na power e não somento com a data do momento salvo.

