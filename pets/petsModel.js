const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  remove,
  getAll,
  findById,
};

async function insert(pet) {
  return db('pets').insert(pet);
}

async function remove(id) {
  return db('pets').where('id', id).del();
}

function getAll() {
  return db('pets');
}

function findById(id) {
  return db('pets').where('id', id);
}