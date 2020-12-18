cytoscape.use(cytoscapeDagre);

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
      { data: { id: 'faucet1', kind: 'faucet' } },
      { data: { id: 'filter1', kind: 'filter' } },
      { data: { id: 'valve1', kind: 'valve' } },
      { data: { id: 'water-tank1', kind: 'water-tank' } },
      { data: { id: 'gravity1', kind: 'gravity' } },
      { data: { id: 'valve2', kind: 'valve' } },
      { data: { id: 'splitter1', kind: 'splitter' } },
      { data: { id: 'plant1', kind: 'plant' } },
      { data: { id: 'plant2', kind: 'plant' } },
      { data: { id: 'plant3', kind: 'plant' } },
      { data: { id: 'plant4', kind: 'plant' } },
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
  },
});
