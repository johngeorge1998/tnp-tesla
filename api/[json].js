import { createServer } from 'http';
import { parse } from 'url';
import jsonServer from 'json-server';

const db = jsonServer.router('data', 'db.json');  
const middlewares = jsonServer.defaults();

export default (req, res) => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    req.url = parsedUrl.path;  
    db(req, res);
  });

  server.on('request', (req, res) => {
    middlewares(req, res, () => db(req, res));
  });

  server.listen();
};
