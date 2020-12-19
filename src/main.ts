import * as express from 'express';
import * as path from 'path';

function initialize() {
  const port = 3000;
  const app = express();
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(
    '/node_modules',
    express.static(path.join(__dirname, 'node_modules'))
  );
  app.listen(port, () => console.log(`Listening on port ${port}`));
}

initialize();
