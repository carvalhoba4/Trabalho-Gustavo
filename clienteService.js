import db from '../configs/database.js';

const createCliente = async (cliente) => {
  const {nome, sobrenome, email, idade} = cliente;
  const [result] = await db.execute(
      'INSERT INTO clientes (nome, sobrenome, email, idade) VALUES (?, ?, ?, ?)',
      [nome, sobrenome, email, idade],
  );
  return result.insertId;
};

const getAllClientes = async () => {
  const [rows] = await db.query('SELECT * FROM clientes');
  return rows;
};

const updateCliente = async (id, cliente) => {
  const {nome, sobrenome, email, idade} = cliente;
  const [result] = await db.execute(
      'UPDATE clientes SET nome = ?, sobrenome = ?, email = ?, idade = ? WHERE id = ?',
      [nome, sobrenome, email, idade, id],
  );
  return result.affectedRows;
};

const deleteCliente = async (id) => {
  const [result] = await db.execute('DELETE FROM clientes WHERE id = ?', [id]);
  return result.affectedRows;
};

export {createCliente, getAllClientes, updateCliente, deleteCliente};
