cytoscape.use(cytoscapeDagre);
cytoscape.use(cytoscapeCxtmenu);

var cy = cytoscape({
  container: document.getElementById('cy'),
  boxSelectionEnabled: false,
  autounselectify: true,
  style: cytoscape
    .stylesheet()
    .selector('node')
    .css({
      height: 80,
      width: 80,
      'background-width': '64px',
      'background-height': '64px',
      'border-color': '#000',
      'border-width': 3,
      'border-opacity': 0.5,
      'border-radius': 0,
      padding: '10%',
      shape: 'round-rectangle',
      'background-color': '#fff',
      'text-valign': 'bottom',
      'text-halign': 'center',
      'text-margin-y': '8px',
      content: 'data(label)',
    })
    .selector('edge')
    .css({
      'curve-style': 'bezier',
      width: 6,
      'target-arrow-shape': 'triangle',
      'line-color': '#3492eb',
      'target-arrow-color': '#3492eb',
    })
    .selector('node[kind = "faucet"]')
    .css({
      'background-image': 'assets/faucet.svg',
    })
    .selector('node[kind = "filter"]')
    .css({
      'background-image': 'assets/filter.svg',
    })
    .selector('node[kind = "gravity"]')
    .css({
      'background-image': 'assets/gravity.svg',
    })
    .selector('node[kind = "plant"]')
    .css({
      'background-image': 'assets/plant.svg',
    })
    .selector('node[kind = "pump"]')
    .css({
      'background-image': 'assets/pump.svg',
    })
    .selector('node[kind = "splitter"]')
    .css({
      'background-image': 'assets/splitter.svg',
    })
    .selector('node[kind = "valve"]')
    .css({
      'background-image': 'assets/valve.svg',
    })
    .selector('node[kind = "water-tank"]')
    .css({
      'background-image': 'assets/water-tank.svg',
    })
    .selector('node[kind = "water-well"]')
    .css({
      'background-image': 'assets/water-well.svg',
    }),
  elements: {
    nodes: [
      {
        data: { id: 'faucet1', kind: 'faucet', label: 'Canilla #1' },
      },
      { data: { id: 'filter1', kind: 'filter', label: 'Filtro #1' } },
      { data: { id: 'valve1', kind: 'valve', label: 'Valvula #1' } },
      { data: { id: 'water-tank1', kind: 'water-tank', label: 'Tanque #1' } },
      { data: { id: 'gravity1', kind: 'gravity', label: 'Gravedad #1' } },
      { data: { id: 'valve2', kind: 'valve', label: 'Valvula #2' } },
      { data: { id: 'splitter1', kind: 'splitter', label: 'Duplicador #1' } },
      { data: { id: 'plant1', kind: 'plant', label: 'Planta #1' } },
      { data: { id: 'plant2', kind: 'plant', label: 'Planta #2' } },
      { data: { id: 'plant3', kind: 'plant', label: 'Planta #3' } },
      { data: { id: 'plant4', kind: 'plant', label: 'Planta #4' } },
    ],
    edges: [
      { data: { source: 'faucet1', target: 'filter1' } },
      { data: { source: 'filter1', target: 'valve1' } },
      { data: { source: 'valve1', target: 'water-tank1' } },
      { data: { source: 'water-tank1', target: 'gravity1' } },
      { data: { source: 'gravity1', target: 'valve2' } },
      { data: { source: 'valve2', target: 'splitter1' } },
      { data: { source: 'splitter1', target: 'plant1' } },
      { data: { source: 'splitter1', target: 'plant2' } },
      { data: { source: 'splitter1', target: 'plant3' } },
      { data: { source: 'splitter1', target: 'plant4' } },
    ],
  },
  layout: {
    name: 'dagre',
    directed: true,
    padding: 10,
    rankDir: 'LR',
    spacingFactor: 1.5,
  },
});

let nodeMenu = cy.cxtmenu({
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
      select: function (ele) {
        console.log(ele.position());
      },
    },
  ],
});

let edgeMenu = cy.cxtmenu({
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
      select: function (ele) {
        console.log(ele.position());
      },
    },
  ],
});
