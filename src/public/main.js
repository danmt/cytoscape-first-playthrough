function main() {
  cytoscape.use(cytoscapeDagre);
  cytoscape.use(cytoscapeCxtmenu);
  cytoscape.use(cytoscapeEdgehandles);

  const drawer = new Drawer(
    createGraph(
      [
        {
          data: { id: 'faucet1', kind: 'faucet', label: 'Canilla #1' },
        },
        { data: { id: 'valve1', kind: 'valve', label: 'Valvula #1' } },
        { data: { id: 'water-tank1', kind: 'water-tank', label: 'Tanque #1' } },
        { data: { id: 'gravity1', kind: 'gravity', label: 'Gravedad #1' } },
        { data: { id: 'valve2', kind: 'valve', label: 'Valvula #2' } },
        { data: { id: 'splitter1', kind: 'splitter', label: 'Duplicador #1' } },
        { data: { id: 'splitter2', kind: 'splitter', label: 'Duplicador #2' } },
        { data: { id: 'splitter3', kind: 'splitter', label: 'Duplicador #3' } },
        { data: { id: 'plant1', kind: 'plant', label: 'Planta #1' } },
        { data: { id: 'plant2', kind: 'plant', label: 'Planta #2' } },
        { data: { id: 'plant3', kind: 'plant', label: 'Planta #3' } },
        { data: { id: 'plant4', kind: 'plant', label: 'Planta #4' } },
      ],
      [
        { data: { source: 'faucet1', target: 'valve1' } },
        { data: { source: 'valve1', target: 'water-tank1' } },
        { data: { source: 'water-tank1', target: 'gravity1' } },
        { data: { source: 'gravity1', target: 'valve2' } },
        { data: { source: 'valve2', target: 'splitter1' } },
        { data: { source: 'splitter1', target: 'splitter2' } },
        { data: { source: 'splitter1', target: 'splitter3' } },
        { data: { source: 'splitter2', target: 'plant1' } },
        { data: { source: 'splitter2', target: 'plant2' } },
        { data: { source: 'splitter3', target: 'plant3' } },
        { data: { source: 'splitter3', target: 'plant4' } },
      ]
    )
  );

  drawer.initialize();

  MicroModal.init({
    onClose: (modal, element, event) => {
      if (!event.target.id) {
        return;
      }

      if (modal.id === 'agregar-componente-modal') {
        drawer.addNode({});
      }
      console.log(modal.id);
      console.log(event.target.id);
    },
    awaitCloseAnimation: true,
    openClass: 'open',
  });
}

main();
