describe('Cypress Downloadfile Testing', () => {
	// it('Medium Size file', () => {
	//     Cypress.config('defaultCommandTimeout', 10000);
	//     cy.visit('http://proof.ovh.net/files/')
	//     cy.downloadFile(
	//         'https://proof.ovh.net/files/100Mb.dat',
	//         'cypress/downloads',
	//         '100Mio.dat',
	//     )
	// })
	it('Small Size test', () => {
		Cypress.config('defaultCommandTimeout', 10000);
		cy.downloadFile(
			'https://proof.ovh.net/files/10Mb.dat',
			'cypress/downloads',
			'10Mio.dat'
		);
	});
	// it('PDF test', () => {
	//     cy.downloadFile(
	//         'http://www.africau.edu/images/default/sample.pdf',
	//         'cypress/downloads',
	//         'sample.pdf'
	//     )
	// })
	it('Image Size test', () => {
		cy.downloadFile(
			'https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg',
			'cypress/downloads',
			'example.jpg'
		);
	});
});