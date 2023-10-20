import { webTables } from '@pages/Elements/GX2-6567-WebTables.Page';
import { faker } from '@faker-js/faker';
// import { removeLogs } from '@helper/RemoveLogs.js';
// removeLogs();

describe('GX2-6567 ✅ToolsQA | Elements | Web Table', () => {
	beforeEach('Precondition: The user should be located in demoqa.com/webtables', () => {
		cy.visit('/webtables');
		cy.url().should('contain', 'webtables');
	});

	it('6568 | TC1: Validate add new record', () => {
		webTables.elements.getFillRowCount().then($rows => {
			const rowCountBefore = $rows.length;
			webTables.elements.addRecordButton().click();
			webTables.addNewRecord().then(randomData => {
				webTables.elements.submitButton().click();
				webTables.elements.getFillRowCount().should('have.length', rowCountBefore + 1);
				webTables.elements
					.getTable()
					.find('[class= rt-tr-group]')
					.eq(rowCountBefore)
					.within(() => {
						webTables.elements.getGridCell().eq(0).should('contain', randomData.firstName);
						webTables.elements.getGridCell().eq(1).should('contain', randomData.lastName);
						webTables.elements.getGridCell().eq(2).should('contain', randomData.age);
						webTables.elements.getGridCell().eq(3).should('contain', randomData.email);
						webTables.elements.getGridCell().eq(4).should('contain', randomData.salary);
						webTables.elements.getGridCell().eq(5).should('contain', randomData.department);
					});
			});
		});
	});

	it('6568 | TC2: Validate cancel adding record', () => {
		webTables.elements.getFillRowCount().then($rows => {
			const rowCountBefore = $rows.length;
			webTables.elements.addRecordButton().click();
			webTables.elements.addRecordForm().should('be.visible');
			webTables.addNewRecord();
			webTables.elements.closeButton().click();
			webTables.elements.addRecordForm().should('not.exist');
			webTables.elements.addRecordButton().click();
			webTables.elements.addRecordForm().should('be.visible');
			webTables.elements.closeButton().click();
			webTables.elements.addRecordForm().should('not.exist');
			webTables.elements.getFillRowCount().should('have.length', rowCountBefore);
		});
	});

	it('6568 | TC3: Validate records filter', () => {
		webTables.filterRecord().then(randomData => {
			const searchTerm = randomData;
			webTables.elements.getTable().should('contain', searchTerm);
		});
	});

	it('6568 | TC4: Validate record record by field', () => {
		const columnHeaders = ['First Name', 'Last Name', 'Age', 'Email', 'Salary'];
		const randomHeader = faker.helpers.arrayElement(columnHeaders);

		webTables.sortedRecord(randomHeader).then(data => {
			const { dataInColumn, sortedData } = data;
			expect(dataInColumn).not.to.equal(sortedData);
		});
	});

	it.only('6568 | TC5: Validate record edit', () => {
		//let initialData;

		webTables.selectRecord().then(randomGet => {
			webTables.getCurrentData(randomGet);
			//cy.log('initialData:', initialData);
			cy.wrap(randomGet).then(index => {
				webTables.elements.getEditButton().eq(index).click();
			});
		});
		const editedData = webTables.recordEdit();
		webTables.elements
			.submitButton()
			.click()
			.then(cellTextArray => {
				cy.wrap(cellTextArray).then(initial => {
					expect(editedData.newFirstName).to.not.equal(initial[0]);
				});
			});
	});

	it('6568 | TC6: Validate record delete ', () => {
		webTables.elements.getFillRowCount().then($rows => {
			const rowCountBefore = $rows.length;
			webTables.selectRecord().then(randomGet => {
				cy.wrap(randomGet).then(index => {
					webTables.elements.getDeleteButton().eq(index).click();
					webTables.elements.getFillRowCount().should('have.length', rowCountBefore - 1);
				});
			});
		});
	});

	it('6568 | TC7: Validate moving between the pagination bY the PREVIOUS and the NEXT button', () => {
		const pageNumber = 1;
		for (let i = 0; i < 10; i++) {
			webTables.elements.addRecordButton().click();
			webTables.addNewRecord();
			webTables.elements.submitButton().click();
		}
		webTables.elements.btnPrevious().should('be.disabled');
		webTables.elements.btnPrevious().should('have.css', 'color', 'rgba(0, 0, 0, 0.6)');
		webTables.elements.btnNext().should('be.enabled');
		webTables.elements.btnNext().trigger('mouseover');
		webTables.elements.btnNext().should('have.css', 'cursor', 'pointer');
		webTables.elements.nextButton().click();
		webTables.elements.btnPrevious().should('be.enabled');
		webTables.elements.getPageNumber().should('have.value', pageNumber + 1);
		webTables.elements.previousButton().click();
		webTables.elements.btnPrevious().should('be.disabled');
		webTables.elements.getPageNumber().should('have.value', pageNumber);
	});

	it('6568 | TC8: Validate show specified number of rows by page', () => {
		webTables.selectRowsSize().then(randomOption => {
			webTables.elements.getTable().then(() => {
				webTables.elements.getRowsSize().should('have.length.gte', parseInt(randomOption));
			});
		});
	});
});
