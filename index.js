import express from 'express';
import conectarAoBanco from './src/config/dbconfig.js'; // Importa a função para conectar ao banco de dados
import routes from './src/routes/postsRoutes.js';
import getTodosOsPosts from './src/models/postsModel.js';


const app = express(); // Cria uma instância do Express para iniciar o servidor
routes (app)
// Conecta ao banco de dados e inicia o servidor
conectarAoBanco()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida');

    // Define a rota para buscar todos os posts
    app.get("/posts", async (req, res) => {
      const posts = await getTodosOsPosts(); // Busca todos os posts no banco de dados
      res.status(200).json(posts); // Retorna os posts como resposta JSON com status 200 (sucesso)
    });

    const port = 3000;// Define a porta em que o servidor irá escutar as requisições
    // Inicia o servidor na porta especificada
    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  })
  .catch(err => {
    console.error('Erro ao iniciar o servidor:', err); // Exibe qualquer erro que ocorra durante a inicialização
  });
