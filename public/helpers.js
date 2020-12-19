const createGraph = (nodes, edges) =>
  cytoscape({
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
      nodes,
      edges,
    },
    layout: {
      name: 'dagre',
      directed: true,
      padding: 10,
      rankDir: 'LR',
      spacingFactor: 1.5,
    },
  });

const removeElementFromGraph = (graph) => (element) => graph.remove(element);
