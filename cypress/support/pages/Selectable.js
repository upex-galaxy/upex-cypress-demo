class Selectable {
	get = {
		tabList: () => cy.get("[id='demo-tab-list']"),
		tabGrid: () => cy.get("[id='demo-tab-grid']"),
		listContainer: () => cy.get("[id= 'verticalListContainer'] li"),
		gridContainer: () => cy.get("[id= 'gridContainer'] li"),
		listPane: () => cy.get("[id='demo-tabpane-list']"),
		gridPane: () => cy.get("[id='demo-tabpane-grid']"),
		rowsGrid: () => cy.get("[id='gridContainer'] div"),
		cras: () => cy.contains('Cras justo odio'),
		dapibus: () => cy.contains('Dapibus ac facilisis in'),
		morbi: () => cy.contains('Morbi leo risus'),
		porta: () => cy.contains('Porta ac consectetur ac'),
		rowOne: () => cy.get("[id='row1'] li"),
		rowTwo: () => cy.get("[id='row2'] li"),
		rowThree: () => cy.get("[id='row3'] li"),
	};

	selectTabGrid() {
		this.get.tabGrid().click();
	}

	validateItemList() {
		this.get.listPane().within(() => {
			this.get.cras();
			this.get.dapibus();
			this.get.morbi();
			this.get.porta();
		});
	}

	validateItemGrid() {
		this.get.gridContainer().then($gridItems => {
			let itemsArrayText = [];
			$gridItems.each((index, $gridItems) => {
				cy.wrap($gridItems)
					.invoke('text')
					.then(text => {
						itemsArrayText.push(text);
					});
			});
			cy.writeFile('../../fixtures/data/selectable.json', itemsArrayText);
		});
	}

	textGrid() {
		this.get
			.gridContainer()
			.eq(1)
			.invoke('text')
			.then(texto => {
				cy.log(texto);
			});
	}

	selectRandomList() {
		this.get.listContainer().then($liElements => {
			let listArray = [];
			$liElements.each((index, $liElements) => {
				//itera por cada li del array
				listArray.push($liElements); //pushea cada li al array
			});
			let arrayLength = listArray.length;
			let random = Cypress._.random(0, arrayLength - 1); //hace un numero random tomando la length del array
			this.get.listContainer().eq(random).click();
			cy.writeFile('../../fixtures/data/selectable.json', { varRandom: random });
		});
	}

	selectAndUnselectRandomList() {
		this.get.listContainer().then($liElements => {
			let listArray = [];
			$liElements.each((index, $liElements) => {
				//itera por cada li del array
				listArray.push($liElements); //pushea cada li al array
			});
			let arrayLength = listArray.length;
			let random = Cypress._.random(0, arrayLength - 1); //hace un numero random tomando la length del array
			this.get.listContainer().eq(random).click();
			this.get.listContainer().eq(random).click();
			cy.writeFile('../../fixtures/data/selectable.json', { varRandom: random });
		});
	}

	multiSelectRandomList() {
		this.get.listContainer().then($liElements => {
			let listArray = [];
			$liElements.each((index, $liElements) => {
				//itera por cada li del array
				listArray.push($liElements); //pushea cada li al array
			});
			let arrayLength = listArray.length;
			//seleccionprimer item
			let randomFirst = Cypress._.random(0, arrayLength - 1); //hace un numero random tomando la length del array
			this.get.listContainer().eq(randomFirst).click();
			//selecciona segundo item
			let randomSec = Cypress._.random(0, arrayLength - 1); //hace un numero random tomando la length del array
			//valida que no sean la misma
			while (randomFirst === randomSec) {
				let randomSec = Cypress._.random(0, arrayLength - 1); //hace un numero random tomando la length del array
			}

			this.get.listContainer().eq(randomSec).click();

			cy.writeFile('../../fixtures/data/selectable.json', { varRandomFirst: randomFirst, varRandomSec: randomSec });
		});
	}

	clickTabGrid() {
		this.get.tabGrid().click();
	}
	selectRandomGrid() {
		this.get.gridContainer().then($liElements => {
			let listArray = [];
			$liElements.each((index, $liElements) => {
				//itera por cada li del array
				listArray.push($liElements); //pushea cada li al array
			});
			let arrayLength = listArray.length;
			let random = Cypress._.random(0, arrayLength - 1); //hace un numero random tomando la length del array
			cy.log(random);
			this.get.gridContainer().eq(random).click(); //selecciona el li randomly
			cy.writeFile('../../fixtures/data/selectable.json', { varRandom: random }); //guarda variable para assertion
		});
	}
}
export const selectable = new Selectable();
