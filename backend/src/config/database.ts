// CONEXAO COM BANCO DE DADOS
import 'dotenv/config'; // Carrega as variáveis de ambiente do arquivo .env
import mysql from 'mysql2/promise';

import path from 'path';
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

import bluebird from 'bluebird';

// Defina as informações de conexão com o seu banco de dados
const dbConfig = {
  host: process.env.BLOG_HOST_URL as string, // ou o endereço do seu servidor MySQL
  user: process.env.BLOG_USERNAME as string,
  password: process.env.BLOG_PASSWORD as string,
  database: process.env.BLOG_DATABASE as string,
  Promise: bluebird, // Use bluebird como a biblioteca de promessas
};

  // Verifica se as variáveis de ambiente necessárias estão definidas
  if (!process.env.BLOG_HOST_URL || !process.env.BLOG_USERNAME || !process.env.BLOG_PASSWORD || !process.env.BLOG_DATABASE) {
    console.error('Erro: Variáveis de ambiente HOST_URL, USERNAME, PASSWORD e DATABASE não estão definidas.');
    process.exit(1); // Encerra o processo com erro
  }

// Crie uma função para inicializar o pool com tratamento de erros
function createPool() {
  try {
    const pool = mysql.createPool(dbConfig);
    console.log('Tentando estabelecer conexão com o banco de dados...');

    // Testa a conexão imediatamente
    pool.getConnection()
      .then((connection) => {
        console.log('Pool de conexões criado com sucesso.');
        connection.release(); // Libera a conexão de volta para o pool
      })
      .catch((error) => {
        if (error.code === 'ER_ACCESS_DENIED_ERROR') {
          console.error('Erro de acesso negado: Verifique as credenciais do banco de dados.');
        } else {
          console.error('Erro ao estabelecer conexão com o banco de dados:', error);
        }
        throw new Error('Falha ao criar o pool de conexões. Verifique as configurações do banco de dados.');
      });

    return pool;
  } catch (error: any) {
    console.error('Erro ao criar o pool de conexões:', error);
    throw new Error('Falha ao criar o pool de conexões. Verifique as configurações do banco de dados.');
  }
}

// Inicialize o pool chamando a função e exporta-o
const pool = createPool();
export default pool;