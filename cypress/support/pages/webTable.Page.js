class WebTable {
	elements = {
		AddButtonRegistration: () => cy.get('#addNewRecordButton'),
		CloseButtonRegistration: () => cy.get('[class="close"] span:not([class="sr-only"])'),
		PopUp_BodyRegistration: () => cy.get('.modal-body'),
		TypeSearchInput: () => cy.get('[autocomplete="off"]'),
		First_nameInput: () => cy.get('input[placeholder="First Name"]'),
		Last_nameInput: () => cy.get('input[placeholder="Last Name"]'),
		EmailInput: () => cy.get('#userEmail'),
		AgeInput: () => cy.get('#age'),
		SalaryInput: () => cy.get('input[type="text"]').eq(5),
		DepartmentInput: () => cy.get('.mr-sm-2.form-control').eq(5),
		SubmitInput: () => cy.get('[type="submit"]'),
		ColumnFirst_nameElement: () => cy.get('[role="columnheader"]').eq(0),
		ColumnLast_nameElement: () => cy.get('[class$="cursor-pointer"]').eq(1),
		ColumnEmail_Element: () => cy.get('[tabindex="-1"]').eq(3),
		ColumnSalaryElement: () => cy.get('[tabindex="-1"]').eq(4),
		ColumnDepartmentElement: () => cy.get('[class$="cursor-pointer"][role="columnheader"]').eq(5),
		ColumnActionElement: () => cy.get('[class$="cursor-pointer"][class~="-sort-asc"]'),
		EditRowButton: RecordNumber => cy.get(`[title="Edit"][id~="edit-record-${RecordNumber}"]`),
		DeleteRowButton: recordNumber => cy.get(`[title="Delete"][id~="delete-record-${recordNumber}"]`),
		FieldRow1Element: () => cy.get('[class="rt-tr -odd"] [class="rt-td"]'),
		FieldRow2Element: () => cy.get('[class="rt-tr -even"] [class="rt-td"]'),
		TotalRowElement: () => cy.get('[role="grid"] .rt-tbody').eq(0),
		SelectSizeRowOption: () => cy.get('[aria-label="rows per page"]'),
	};

	ClickAddButton() {
		this.elements.AddButtonRegistration().click();
	}

	ClickCloseButton() {
		this.elements.CloseButtonRegistration().click();
	}

	ClickSubmit() {
		this.elements.SubmitInput().click();
	}

	ClickPopUp_Registration() {
		this.elements.PopUp_BodyRegistration().click();
	}

	SelectSizeRow(data) {
		this.elements.SelectSizeRowOption().select(data);
	}

	ClickColumnOfTable(columnIndex) {
		let columnValue;
		switch (columnIndex) {
			case 0:
				columnValue = this.elements.ColumnFirst_nameElement().click();
				break;
			case 1:
				columnValue = this.elements.ColumnLast_nameElement().click();
				break;
			case 2:
				columnValue = this.elements.ColumnEmail_Element().click();
				break;
			case 3:
				columnValue = this.elements.ColumnSalaryElement().click();
				break;
			case 4:
				columnValue = this.elements.ColumnDepartmentElement().click();
				break;
			case 5:
				columnValue = this.elements.ColumnActionElement().click();
				break;
			default:
				columnValue = 'Column of Table not exist';
				break;
		}
	}

	AddNewUser(Fname, Lname, Email, Age, Salary, Department) {
		Fname && this.elements.First_nameInput().type(Fname);

		Lname && this.elements.Last_nameInput().type(Lname);

		Email && this.elements.EmailInput().type(Email);

		Age && this.elements.AgeInput().type(Age);

		Salary && this.elements.SalaryInput().type(Salary);

		Department && this.elements.DepartmentInput().type(Department);
	}

	ClickEditUser(recordNumber, Fname = null, Lname = null, Email = null, Age = null, Salary = null, Department = null) {
		this.elements.EditRowButton(recordNumber).click();

		if (Fname !== null) {
			this.elements.First_nameInput().clear().type(Fname);
		}
		if (Lname !== null) {
			this.elements.Last_nameInput().clear().type(Lname);
		}
		if (Email !== null) {
			this.elements.EmailInput().clear().type(Email);
		}
		if (Age !== null) {
			this.elements.AgeInput().clear().type(Age);
		}
		if (Salary !== null) {
			this.elements.SalaryInput().clear().type(Salary);
		}
		if (Department !== null) {
			this.elements.DepartmentInput().clear().type(Department);
		}
	}

	ClickDeleteUser(recordNumber) {
		this.elements.DeleteRowButton(recordNumber).click();
	}

	TypeSearchBar(data) {
		this.elements.TypeSearchInput().type(data);
	}

	FieldRow1(IndexFieldRow1) {
		return this.elements.FieldRow1Element().eq(IndexFieldRow1).invoke('text');
	}

	FieldRow2(IndexFieldRow2) {
		return this.elements.FieldRow2Element().eq(IndexFieldRow2).invoke('text');
	}

	TotalRow() {
		this.elements.TotalRowElement();
	}
}

export const webTable = new WebTable();
