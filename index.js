const express = require('express');
const server = express();
const filmes = require('./src/data/filmes.json')

server.get('/filmes', (req, resp) => {
    return resp.json(filmes);
}); 

server.listen(3000, () => {
    console.log('Server running....');
})