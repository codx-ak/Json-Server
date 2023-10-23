const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const fs = require('fs');
const path = require('path');
const db = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json')))
const router = jsonServer.router(db)
// const router = jsonServer.router('db.json');

server.use(middlewares);
// Add this before server.use(router)
server.use(jsonServer.rewriter({
    '/api/*': '/$1'
}))
server.use(router);

server.listen(3000,()=>console.log("server Running"));

module.exports=server;