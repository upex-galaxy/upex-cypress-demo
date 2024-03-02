import {droppablePage} from '../../../support/pages/GX3-2469-Droppablee.Page'

describe('GX3-2469 | ToolsQA | Interactions | Droppable ',()=>{
	beforeEach ('',()=>{
		cy.visit('https://demoqa.com/droppable')
		cy.url().should('contain','droppable')
	})

	it('2469 | TC01 Validate that "Droppable Box" changes name and color when paired with Dragable Box',()=>{
		droppablePage.get.dragMeBox().trigger('mousedown', { which: 1 });
		droppablePage.get.dropHereBoxSimple().trigger('mousemove').trigger('mouseup', { force: true });
		droppablePage.get.dropHereBoxSimple().should('have.text','Dropped!').and('have.css', 'background-color','rgb(70, 130, 180)');	
	})

	it('2469| TC02 validate move "Not Acceptable" and "Aceptable" boxes to "Drope here" box in tap "Accept"' ,()=>{
		
		droppablePage.clickOnAcceptTab();
		droppablePage.get.notAcceptBox().trigger('mousedown', {which:1},{force: true});
		droppablePage.get.dropHereBoxAccept().trigger('mousemove', {force:true}).trigger('mouseup', {force:true});
		droppablePage.get.dropHereBoxAccept().should('have.text','Drop here');

		droppablePage.get.acceptableBox().trigger('mousedown', {which:1},{force: true})
		droppablePage.get.dropHereBoxAccept().trigger('mousemove',{ force: true }).trigger('mouseup', {force:true}, {timeout:2000});
		droppablePage.get.dropHereBoxAccept().should('have.text','Dropped!').and('have.css', 'background-color','rgb(70, 130, 180)');

	})

	it('2469| TC03 move "Drag me" to "Outer droppable (not greedy)" in tab "Prevent Propogation"',()=>{
		droppablePage.clickOnProptab()
		droppablePage.get.dragMe().trigger('mousedown', {which:1},{force: true})
		droppablePage.get.textOuterDroppable().trigger('mousemove',{ force: true }).trigger('mouseup', {force: true});
		droppablePage.get.outerNotGreedy().should('have.text','Dropped!Inner droppable (not greedy)').and('have.css', 'background-color','rgb(70, 130, 180)');
	})

	it('2469| TC04 move "Drag me" to "Inner droppable (not greedy)" in tab "Prevent Propogation"',()=>{
		droppablePage.clickOnProptab()
		droppablePage.get.dragMe().trigger('mousedown', {which:1},{force: true})
		droppablePage.get.innerNotGreedy().trigger('mousemove',{ force: true }).trigger('mouseup', {force: true});
		droppablePage.get.innerNotGreedy().should('have.text','Dropped!').and('have.css', 'background-color','rgb(70, 130, 180)');
		droppablePage.get.outerNotGreedy().should('have.text','Dropped!Dropped!').and('have.css', 'background-color','rgb(70, 130, 180)');
	})

	it('2469| TC05 move "Drag me" to "Outer droppable (greedy)" in tab "Prevent Propogation"',()=>{
		droppablePage.clickOnProptab()
		droppablePage.get.dragMe().trigger('mousedown', {which:1},{force: true})
		droppablePage.get.textOuterDroppableGreedy().trigger('mousemove',{ force: true }).trigger('mouseup', {force: true});
		droppablePage.get.outerGreedy().should('have.text','Dropped!Inner droppable (greedy)').and('have.css', 'background-color','rgb(70, 130, 180)')
	})

	it('2469| TC06 move "Drag me" to "Inner droppable (greedy)" in tab "Prevent Propogation"',()=>{
		droppablePage.clickOnProptab()
		droppablePage.get.dragMe().trigger('mousedown', {which:1},{force: true})
		droppablePage.get.innerGreedy().trigger('mousemove',{ force: true }).trigger('mouseup', {force: true});
		droppablePage.get.innerGreedy().should('have.text','Dropped!').and('have.css', 'background-color','rgb(70, 130, 180)');
	})

	it('2469| TC07 move "will revert" box to "Drop Here" box on Revert tab',()=>{
		droppablePage.clickOnDragTab()
		let initialPosition;
		cy.get('#revertable').then(($element) => {	
   			 // Obtiene las coordenadas iniciales
    		initialPosition = $element.position();
 		});

		droppablePage.get.revertBox().trigger('mousedown', {which:1},{force: true})
		droppablePage.get.dropHereBox().trigger('mousemove',{ force: true }).trigger('mouseup', {force: true});
		droppablePage.get.dropHereBox().should('have.text','Dropped!').and('have.css', 'background-color','rgb(70, 130, 180)');

		cy.wait(1000)
		cy.get('#revertable').then(($element) => {
			const newPosition = $element.position();
			expect(newPosition).to.deep.equal(initialPosition);
  		});	
	})
	
	it('2469| TC08 move "Not revert" box to "Drop Here" box on Revert tab',()=>{
		droppablePage.clickOnDragTab()
		droppablePage.get.norRevertBox().trigger('mousedown', {which:1},{force: true})
		droppablePage.get.dropHereBox().trigger('mousemove',{ force: true }).trigger('mouseup', {force: true});
		droppablePage.get.dropHereBox().should('have.text','Dropped!').and('have.css', 'background-color','rgb(70, 130, 180)');
	})
})