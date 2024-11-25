import { MongoClient } from 'mongodb';
import 'dotenv/config';
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);

async function conectarAoBanco() {
  try {
    await client.connect();
    console.log('Conectado ao MongoDB!');
    return client;
  } catch (err) {
    console.error('Erro ao conectar ao MongoDB:', err);
    throw err;
  }
}

export default conectarAoBanco;
