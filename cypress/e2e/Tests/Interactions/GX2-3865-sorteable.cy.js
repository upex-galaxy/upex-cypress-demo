describe('This is your test project title', () => {
	before(() => {
		// runs once before all tests
	});
	beforeEach(() => {
		// runs before every it() test block
	});
	afterEach(() => {
		// runs after every it() test block
	});
	after(() => {
		// runs once after all tests
	});
	context('This is your test suite title', () => {
		// -- Start: Cypress Tests --
		it('3866 | TC1:This is your test case one title', () => {
			// Write your test case one here
		});
		it('3866 | TC2:This is your test case two title', () => {
			// Write your test case two here
		});
	});
});
