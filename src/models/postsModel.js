import conectarAoBanco from "../config/dbconfig.js"; // Importa a função para conectar ao banco de dados.
const conexao = await conectarAoBanco (process.env.MONGODB_URI); // Estabelece a conexão com o banco de dados MongoDB usando a URI fornecida pela variável de ambiente MONGODB_URI

// Função assíncrona para buscar todos os posts no banco de dados
export default async function getTodosOsPosts(params) {
  const db = conexao.db('imersao-instalike'); // Seleciona o banco de dados
  const colecao = db.collection('posts'); // Seleciona a coleção de posts
  return colecao.find().toArray(); // Retorna todos os documentos da coleção como um array
}