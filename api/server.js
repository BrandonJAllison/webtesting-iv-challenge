const express = require('express');

const pets = require('../pets/petsModel.js');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
  res.status(200).json({ API: 'Working'});
});

server.get('/pets', async (req, res) => {
  const rows = await pets.getAll();

  res.status(200).json(rows);
});

server.post('/pets', async (req, res) => {
  const petsData = req.body;

  if (petsData.name) {
    const ids = await pets.insert(petsData);
    res.status(201).json(ids);
  } else {
    res.status(400).json({ error: 'missing name' });
  }
});

server.delete('/pets', async (req, res) => {
  
})

module.exports = server;