import { sortable } from '@pages/Interactions/sortablePage';
import '@4tw/cypress-drag-drop';
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

describe('GX2-3452 | ToolsQA | Interactions | Sortable', () => {
	let data;
	before('Fixture', () => {
		cy.fixture('/data/sortable.json').then(dato => {
			data = dato;
		});
	});
	beforeEach('User must be in the website ', () => {
		cy.visit('https://demoqa.com/sortable ');
	});
	it('GX2-3453 | TC1: Validate tabs “List” and “Gird” exist and "List" show the list of items', () => {
		sortable.get.listTab().should('exist').and('be.visible');
		sortable.get.gridTab().should('exist').and('not.be.selected');
		sortable.get.listItems().should('exist').and('be.visible');
	});
	it('GX2-3453 | TC2: Validate the order and list items.', () => {
		sortable.get
			.listContainer()
			.children()
			.each((item, index) => {
				expect(item.text()).to.be.equal(data.listItems[index]);
				expect(item.text()).to.be.oneOf(data.listItems);
			});
	});
	it('GX2-3453 | TC3: Validate drag a list item between other list items and stay in the selected order', () => {
		
		let arrayNewList = [];	
		
		sortable.moveRandomListItem();
		sortable.getListItems().each(item=>{
			arrayNewList.push(item.text());
		}).then(() => {
			// los números corresponden a las coordenadas X e Y de cada item de la lista.
			if( Cypress.env('randomCoordinateList') > 392 && Cypress.env('randomCoordinateList') < 442){				
				expect(arrayNewList[0]).to.be.equal(data.listItems[Cypress.env('randomItem')]);
			}
			else if( Cypress.env('randomCoordinateList') > 442 && Cypress.env('randomCoordinateList') < 491){
				expect(arrayNewList[1]).to.be.equal(data.listItems[Cypress.env('randomItem')]);
			}
			else if(Cypress.env('randomCoordinateList') > 491 && Cypress.env('randomCoordinateList') < 540 ){
				expect(arrayNewList[2]).to.be.equal(data.listItems[Cypress.env('randomItem')]);
			}
			else if( Cypress.env('randomCoordinateList') > 540 && Cypress.env('randomCoordinateList') < 589){
				expect(arrayNewList[3]).to.be.equal(data.listItems[Cypress.env('randomItem')]);
			}
			else if( Cypress.env('randomCoordinateList') > 589 && Cypress.env('randomCoordinateList') < 638){
				expect(arrayNewList[4]).to.be.equal(data.listItems[Cypress.env('randomItem')]);
			}
			else{				
				expect(arrayNewList[5]).to.be.equal(data.listItems[Cypress.env('randomItem')]);
			}
		});	
	});
	it('GX2-3453 | TC4: Validate the grid items and a 3X3 grid is displayed', ()=>{
		sortable.clickGridTab();
		sortable.get.grid().children().each((item, index) => {
			expect(item.text()).to.be.equal(data.gridItems[index]);			
		});
		sortable.get.grid().should('have.css', 'display' ,'inline-grid').and('have.css', 'grid-template-columns', '108px 108px 108px');

	});
	it('GX2-3453 | TC5: Validate drag a grid item between other grid items and stay in the selected order', ()=>{
	    let arrayNewGrid = [];
		sortable.clickGridTab();
		sortable.getRandomGridItem().trigger('mousedown',{which:1})
		sortable.getRandomGridTarget().trigger('mousemove').click({force:true});
		sortable.getGridItems().each(item=>{
			arrayNewGrid.push(item.text());			
		}).then(()=>{
			expect(arrayNewGrid[Cypress.env('randomGridTarget')]).to.be.equal(data.gridItems[Cypress.env('randomGridItem')])
		});	
	});	
});	

		


