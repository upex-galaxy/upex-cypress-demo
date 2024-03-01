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

	it('2469| TC003 move "Drag me" to "Outer droppable (not greedy)"',()=>{
		droppablePage.clickOnProptab()
		droppablePage.get.dragMe().trigger('mousedown', {which:1},{force: true})
		droppablePage.get.textOuterDroppable().trigger('mousemove',{ force: true }).trigger('mouseup', {force: true});
		droppablePage.get.outerNotGreedy().should('have.text','Dropped!Inner droppable (not greedy)').and('have.css', 'background-color','rgb(70, 130, 180)');
	})

	it('2469| TC004 move "Drag me" to "Inner droppable (not greedy)"',()=>{
		droppablePage.clickOnProptab()
		droppablePage.get.dragMe().trigger('mousedown', {which:1},{force: true})
		droppablePage.get.innerNotGreedy().trigger('mousemove',{ force: true }).trigger('mouseup', {force: true});
		droppablePage.get.innerNotGreedy().should('have.text','Dropped!').and('have.css', 'background-color','rgb(70, 130, 180)');
		droppablePage.get.outerNotGreedy().should('have.text','Dropped!Dropped!').and('have.css', 'background-color','rgb(70, 130, 180)');
	})

	it('2469| TC005 move "Drag me" to "Outer droppable (greedy)"',()=>{
		droppablePage.clickOnProptab()
		droppablePage.get.dragMe().trigger('mousedown', {which:1},{force: true})
		droppablePage.get.textOuterDroppableGreedy().trigger('mousemove',{ force: true }).trigger('mouseup', {force: true});
		droppablePage.get.outerGreedy().should('have.text','Dropped!Inner droppable (greedy)').and('have.css', 'background-color','rgb(70, 130, 180)')
	})

	it('2469| TC006 move "Drag me" to "Inner droppable (greedy)"',()=>{
		droppablePage.clickOnProptab()
		droppablePage.get.dragMe().trigger('mousedown', {which:1},{force: true})
		droppablePage.get.innerGreedy().trigger('mousemove',{ force: true }).trigger('mouseup', {force: true});
		droppablePage.get.innerGreedy().should('have.text','Dropped!').and('have.css', 'background-color','rgb(70, 130, 180)');
	})
	
})