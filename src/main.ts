import * as express from 'express';

function initialize() {
  const port = 3000;
  const app = express();
  app.use(express.static('src/public'));
  app.use('/node_modules', express.static('node_modules'));
  app.listen(port, () => console.log(`Listening on port ${port}`));
}

initialize();
