import {selectablePage} from '../../../support/pages/GX3-2348-Selectable.Page'

const activeElements  = (value)=>{
	if (value ==='grid'){
	selectablePage.clickTabGrid();
	selectablePage.get.GridBtn().should('have.class','active')
	}

	selectablePage.getNumberArray(value).then(valueArray=>{
		for (let i =0; i<valueArray ; i++){
			const num= i;
			selectablePage.selectAllButtons(value,num)
			selectablePage.get.arrayElements(value).eq(num).should('have.class','active')
		}
	})
};

const disableElements = (value) => {
	if (value ==='grid'){
	selectablePage.clickTabGrid();
	}
	selectablePage.getNumberArray(value).then(valueArray=>{
		for (let i =0; i<valueArray ; i++){
			const num= i;
			selectablePage.get.arrayElements(value).eq(num).should('not.have.class','active')
		};	
	});
};


describe('ToolsQA | Interactions | Selectable',()=>{
	beforeEach('',()=>{
		cy.visit('https://demoqa.com/selectable')
		cy.url().should("include", "selectable")
	})

		
	it('23551 | TC01 validate Select all element by GRID',()=>{
		activeElements('grid');
	})
	
	it('23551 | TC02 validate Select all element by List',()=>{
		activeElements('list');
	})


	it('23551 | TC03 validate desselect all element by List',()=>{
		disableElements('list');
	})


	it('23551 | TC04 validate desselect all element by GRID',()=>{
		disableElements('grid');
	})
})