class Button {
	get = {
		ButtonExpandAll: () => cy.get('[class$="expand-all"]').eq(0),
		ButtonCollapseAll: () => cy.get('[class$="collapse-all"]').eq(0),
		FolderExpanded: () => cy.get('[class$="rct-node-expanded"]'),
		FolderCollapsed: () => cy.get('[class$="rct-node-collapsed"]'),
		CheckBox: () => cy.get('[class="rct-checkbox"]'),
		CheckedBox: () => cy.get('[type="checkbox"]'),
		SelectedResult: () => cy.get('[class="text-success"]'),
	};

	SelectedCheckbox(option) {
		this.get.CheckBox().eq(option).click({ force: true });
	}

	SelectedCheckboxRandom() {
		let option = Math.floor(Math.random() * 17);
		this.get.CheckBox().eq(option).click({ force: true });
		return option;
	}

	ResultSpect(type) {
		let options = {
			0: 'homedesktopnotescommandsdocumentsworkspacereactangularveuofficepublicprivateclassifiedgeneraldownloadswordfileexcelfile',
			1: 'desktopnotescommands',
			2: 'notes',
			3: 'commands',
			4: 'documentsworkspacereactangularveuofficepublicprivateclassifiedgeneral',
			5: 'workspacereactangularveu',
			6: 'react',
			7: 'angular',
			8: 'veu',
			9: 'officepublicprivateclassifiedgeneral',
			10: 'public',
			11: 'private',
			12: 'classified',
			13: 'general',
			14: 'downloadswordfileexcelfile',
			15: 'wordfile',
			16: 'excelfile',
		};
		let resultspect = options[type];
		return resultspect;
	}
}

export const Selected = new Button();
