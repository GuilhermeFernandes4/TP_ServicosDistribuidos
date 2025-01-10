TP_ServicosDistribuidos
Este projeto é uma aplicação distribuída que implementa uma API RESTful utilizando os conceitos fundamentais de sistemas distribuídos. O sistema foi projetado para ser executado em containers Docker e está documentado para facilitar seu uso.

Informações Acadêmicas

Unidade Curricular: Serviços Distribuídos

Professor: Wenderson Wanzeller

Aluno: [Nome do Aluno]

Matrícula: [Número de Matrícula]

Ano Letivo: 2024/2025

Instituição de Ensino: [Nome da Escola/Universidade]

Funcionalidades

API RESTful com suporte aos métodos HTTP: GET, POST, PUT, DELETE.

Versionamento do código no GitHub com branches para desenvolvimento e produção.

Imagem Docker publicada no Docker Hub.

Documentação da API no arquivo API.md.

Arquivo de coleção do Postman disponível no repositório.

Requisitos

Para executar este sistema, você precisará dos seguintes itens instalados:

Docker (versão atualizada).

Git.

Postman (opcional, para testar as rotas da API).

Como Executar

Passo 1: Clonar o Repositório

Execute o comando abaixo para clonar o repositório do GitHub:

git clone <link-do-repositorio>

Acesse o diretório do projeto:

cd <nome-do-diretorio>

Passo 2: Executar a Aplicação com Docker

Certifique-se de que o Docker está em execução e utilize o comando abaixo para construir e executar a aplicação:

docker-compose up

Isso iniciará a aplicação e ela estará disponível no endereço: http://localhost:.

Passo 3: Testar as Rotas da API

A API pode ser testada utilizando ferramentas como o Postman. Todas as rotas e detalhes de requisição estão documentados no arquivo API.md. Além disso, você pode importar o arquivo de coleção do Postman incluído no repositório para facilitar os testes.

Imagem Docker

A imagem Docker da aplicação foi publicada no Docker Hub e pode ser baixada diretamente com o comando:

docker pull <seu-username>/<nome-da-imagem>

Estrutura do Repositório

API.md: Documentação detalhada das rotas da API.

docker-compose.yml: Configuração para executar a aplicação em containers Docker.

postman_collection.json: Arquivo de coleção do Postman para facilitar os testes.

src/: Código-fonte da aplicação.

Documentação da API

Endpoint: Criar Usuário

URL: /users

Método: POST

Descrição: Este endpoint permite criar um novo usuário no sistema.

Entrada (Request Body):

{
  "name": "João Silva",
  "email": "joaosilva@example.com"
}

Saída (Response):

Sucesso (201 Created):

{
  "id": 1,
  "name": "João Silva",
  "email": "joaosilva@example.com"
}

Erro (400 Bad Request):

{
  "error": "E-mail inválido"
}

Endpoint: Obter Usuário por ID

URL: /users/{id}

Método: GET

Descrição: Retorna os detalhes de um usuário pelo ID fornecido.

Entrada (Parâmetros de URL):

id: ID do usuário a ser retornado.

Saída (Response):

Sucesso (200 OK):

{
  "id": 1,
  "name": "João Silva",
  "email": "joaosilva@example.com"
}

Erro (404 Not Found):

{
  "error": "Usuário não encontrado"
}

Endpoint: Atualizar Usuário

URL: /users/{id}

Método: PUT

Descrição: Atualiza os dados de um usuário existente.

Entrada (Request Body e Parâmetros de URL):

id: ID do usuário a ser atualizado.

Body:

{
  "name": "João Silva Atualizado",
  "email": "joaosilva@novoemail.com"
}

Saída (Response):

Sucesso (200 OK):

{
  "id": 1,
  "name": "João Silva Atualizado",
  "email": "joaosilva@novoemail.com"
}

Erro (400 Bad Request):

{
  "error": "Dados inválidos"
}

Erro (404 Not Found):

{
  "error": "Usuário não encontrado"
}

Endpoint: Deletar Usuário

URL: /users/{id}

Método: DELETE

Descrição: Remove um usuário do sistema.

Entrada (Parâmetros de URL):

id: ID do usuário a ser removido.

Saída (Response):

Sucesso (204 No Content):
Não retorna nenhum conteúdo.

Erro (404 Not Found):

{
  "error": "Usuário não encontrado"
}

Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para mais informações.

