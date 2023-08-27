const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
// Add this before server.use(router)
server.use(jsonServer.rewriter({
    '/*': '/$1'
}))
server.use(router);

server.listen(port);