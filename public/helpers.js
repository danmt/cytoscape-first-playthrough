const createGraph = (nodes, edges) =>
  cytoscape({
    container: document.getElementById('cy'),
    boxSelectionEnabled: false,
    autounselectify: true,
    wheelSensitivity: 0.5,
    style: [
      // Style all nodes/edges
      {
        selector: 'node',
        style: {
          height: 80,
          width: 80,
          'background-width': '64px',
          'background-height': '64px',
          'border-color': '#000',
          'border-width': 3,
          'border-opacity': 0.5,
          padding: '10%',
          shape: 'round-rectangle',
          'background-color': '#fff',
          'text-valign': 'bottom',
          'text-halign': 'center',
          'text-margin-y': '8px',
          content: 'data(label)',
        },
      },
      {
        selector: 'edge',
        style: {
          'curve-style': 'bezier',
          width: 6,
          'target-arrow-shape': 'triangle',
          'line-color': '#3492eb',
          'target-arrow-color': '#3492eb',
        },
      },
      // Give each node kind a background image
      {
        selector: 'node[kind = "faucet"]',
        style: {
          'background-image': 'assets/faucet.svg',
        },
      },
      {
        selector: 'node[kind = "filter"]',
        style: {
          'background-image': 'assets/filter.svg',
        },
      },
      {
        selector: 'node[kind = "gravity"]',
        style: {
          'background-image': 'assets/gravity.svg',
        },
      },
      {
        selector: 'node[kind = "plant"]',
        style: {
          'background-image': 'assets/plant.svg',
        },
      },
      {
        selector: 'node[kind = "pump"]',
        style: {
          'background-image': 'assets/pump.svg',
        },
      },
      {
        selector: 'node[kind = "splitter"]',
        style: {
          'background-image': 'assets/splitter.svg',
        },
      },
      {
        selector: 'node[kind = "valve"]',
        style: {
          'background-image': 'assets/valve.svg',
        },
      },
      {
        selector: 'node[kind = "water-tank"]',
        style: {
          'background-image': 'assets/water-tank.svg',
        },
      },
      {
        selector: 'node[kind = "water-well"]',
        style: {
          'background-image': 'assets/water-well.svg',
        },
      },
      // Style the edge handles extension
      {
        selector: '.eh-handle',
        style: {
          'background-color': 'red',
          width: 12,
          height: 12,
          shape: 'ellipse',
          'overlay-opacity': 0,
          'border-width': 12, // makes the handle easier to hit
          'border-opacity': 0,
        },
      },
      {
        selector: '.eh-hover',
        style: {
          'background-color': 'red',
        },
      },
      {
        selector: '.eh-source',
        style: {
          'border-width': 2,
          'border-color': 'red',
        },
      },
      {
        selector: '.eh-target',
        style: {
          'border-width': 2,
          'border-color': 'red',
        },
      },
      {
        selector: '.eh-preview, .eh-ghost-edge',
        style: {
          'line-color': 'red',
          'target-arrow-color': 'red',
          'source-arrow-color': 'red',
        },
      },
      {
        selector: '.eh-ghost-edge.eh-preview-active',
        style: {
          opacity: 0,
        },
      },
    ],
    elements: {
      nodes,
      edges,
    },
  });
