class Application {
  constructor(graph) {
    this.graph = graph;
  }

  initialize() {
    // Set up graph layout
    this.setupLayout();
    this.layout.run();
    // Set up extensions
    this.setupNodeContextMenu();
    this.setupEdgeContextMenu();
    this.setupEdgeHandles();
    // Listen to events
    this.graph.promiseOn('add', 'node, edge').then(() => this.onElementAdded);
  }

  onElementAdded() {
    this.layout.run();
  }

  setupNodeContextMenu() {
    this.graph.cxtmenu({
      selector: 'node',
      commands: [
        {
          content: '<span class="fa fa-info fa-2x"></span>',
          select: function (ele) {
            console.log(ele.position());
          },
        },
        {
          content: '<span class="fa fa-edit fa-2x"></span>',
          select: function (ele) {
            console.log(ele.position());
          },
        },
        {
          content: '<span class="fa fa-trash fa-2x"></span>',
          select: (element) => this.removeElementFromGraph(element),
        },
      ],
    });
  }

  setupEdgeContextMenu() {
    this.graph.cxtmenu({
      selector: 'edge',
      commands: [
        {
          content: '<span class="fa fa-info fa-2x"></span>',
          select: function (ele) {
            console.log(ele.position());
          },
        },
        {
          content: '<span class="fa fa-plus fa-2x"></span>',
          select: (edge) =>
            this.addConnectedNode(edge, {
              id: 'faucet2',
              kind: 'faucet',
              label: 'Canilla #2',
            }),
        },
        {
          content: '<span class="fa fa-edit fa-2x"></span>',
          select: function (ele) {
            console.log(ele.position());
          },
        },
        {
          content: '<span class="fa fa-trash fa-2x"></span>',
          select: (element) => this.removeElementFromGraph(element),
        },
      ],
    });
  }

  setupEdgeHandles() {
    this.edgeHandles = this.graph.edgehandles({
      snap: true,
    });

    document.querySelector('#draw-on').addEventListener('click', function () {
      eh.enableDrawMode();
    });

    document.querySelector('#draw-off').addEventListener('click', function () {
      eh.disableDrawMode();
    });

    document.querySelector('#start').addEventListener('click', function () {
      eh.start(cy.$('node:selected'));
    });
  }

  setupLayout() {
    this.layout = this.graph.makeLayout({
      name: 'dagre',
      directed: true,
      padding: 10,
      rankDir: 'LR',
      spacingFactor: 1.5,
    });
  }

  addConnectedNode(edge, data) {
    this.graph.remove(edge);
    this.graph.add([
      { data, group: 'nodes' },
      {
        group: 'edges',
        data: { source: edge.data('source'), target: data.id },
      },
      {
        group: 'edges',
        data: { source: data.id, target: edge.data('target') },
      },
    ]);
  }

  removeElementFromGraph(element) {
    this.graph.remove(element);
  }
}
