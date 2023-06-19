class BrokenLinks {
	get = {
		validImg: () => cy.get(':nth-child(2) > [src="/images/Toolsqa.jpg"]'),
		brokenImg: () => cy.get('[src="/images/Toolsqa_1.jpg"]'),
		validLink: () => cy.get('[href="http://demoqa.com"]'),
		invalidLink: () => cy.get('[href="http://the-internet.herokuapp.com/status_codes/500"]'),
	};
}

export const brokenLinks = new BrokenLinks();
