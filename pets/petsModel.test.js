const pet = require('./petsModel');
const db = require('../data/dbConfig');

describe('the pets model', () => {

  afterEach(async () => {
    await db('pets').truncate();
  })

  it('should insert new pet', async() => {
    const ids = await pet.insert({ name: 'Spud'});

    expect(ids.length).toBe(1);
    expect(ids[0]).toBe(1);
    
  })
})