function main() {
  cytoscape.use(cytoscapeDagre);
  cytoscape.use(cytoscapeCxtmenu);

  const app = new Application(
    createGraph(
      [
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
      [
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
      ]
    )
  );

  app.initialize();
}

main();
