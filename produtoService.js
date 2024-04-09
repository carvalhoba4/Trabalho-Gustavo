import db from '../configs/database.js';

const createProduto = async (produto) => {
  const {nome, descricao, preco} = produto;
  const [result] = await db.execute(
      'INSERT INTO produtos (nome, descricao, preco) VALUES (?, ?, ?)',
      [nome, descricao, preco],
  );
  return result.insertId;
};

const getAllProdutos = async () => {
  const [rows] = await db.query('SELECT * FROM produtos');
  return rows;
};

const updateProduto = async (id, produto) => {
  const {nome, descricao, preco} = produto;
  const [result] = await db.execute(
      'UPDATE produtos SET nome = ?, descricao = ?, preco = ? WHERE id = ?',
      [nome, descricao, preco, id],
  );
  return result.affectedRows;
};

const deleteProduto = async (id) => {
  const [result] = await db.execute('DELETE FROM produtos WHERE id = ?', [id]);
  return result.affectedRows;
};

export {createProduto, getAllProdutos, updateProduto, deleteProduto};
