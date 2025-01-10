# Use a base image
FROM node:18

# Defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos de configuração
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o código-fonte
COPY . .

# Exponha a porta
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["node", "index.js"]

