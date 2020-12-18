import * as express from 'express';
import * as path from 'path';

function initialize() {
  const port = 3000;
  const app = express();
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(
    '/cytoscape',
    express.static(
      path.join(__dirname, 'node_modules/cytoscape/dist/cytoscape.min.js')
    )
  );
  app.use(
    '/cytoscape-dagre',
    express.static(
      path.join(__dirname, 'node_modules/cytoscape-dagre/cytoscape-dagre.js')
    )
  );
  app.use(
    '/dagre',
    express.static(path.join(__dirname, 'node_modules/dagre/dist/dagre.min.js'))
  );
  app.listen(port, () => console.log(`Listening on port ${port}`));
}

initialize();
