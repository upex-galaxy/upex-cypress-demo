export class SelectMenu {
	ddlSelectValue = () => cy.get('[class=" css-1wa3eu0-placeholder"]').eq(0);
	ddlSelectOne = () => cy.get('[class=" css-1wa3eu0-placeholder"]').eq(1);
	ddlMultiselect = () => cy.get('[class=" css-1wa3eu0-placeholder"]').eq(2);
	multiSelectColors = () => cy.get('[class="css-1rhbuit-multiValue"]');
	containerDropdown = valueDropdown => cy.get(`[id^="react-select-${valueDropdown}-option-"]`);
	messageOptions = () => cy.get('[class=" css-1gl4k7y"]');
	multiSelectCars = () => cy.get('[id="cars"]');

	//Texto
	getSelectedMenuItemText() {	return cy.get('.css-1uccc91-singleValue').invoke('text')}

	//TC1
	clickSelectValueMenu() {this.ddlSelectValue().click()}
	get selectValueMenu() {return cy.get('[id^="react-select-2-option-"]')}
	getSelectValueMenuCount() {return this.selectValueMenu.then($items => $items.length)}
	getMenuItemByIndex(index) {return this.selectValueMenu.eq(index)}
	getMenuItemByText(index) {return this.selectValueMenu.eq(index).invoke('text')}

	//TC2
	clickSelectOneMenu() {this.ddlSelectOne().click()}
	get selectOneMenu() {return cy.get('[id^="react-select-3-option"]')}
	getSelectOneMenuCount() {return this.selectOneMenu.then($items => $items.length)}
	getOneMenuItemByIndex(index) {return this.selectOneMenu.eq(index)}
	getOneMenuItemByText(index) {return this.selectOneMenu.eq(index).invoke('text')}

	//TC3
	getOldMenuItemByIndex(index) {cy.get('#oldSelectMenu').select(index)}
	getOldSelectedText() {return cy.get('#oldSelectMenu option:selected').invoke('text')}

	//TC4
	clickSelectMultiselect() {this.ddlMultiselect().click()}

	//TC5
	selectCars() {this.multiSelectCars().select([2, 0])}
}
export const selectMenuPage = new SelectMenu();
