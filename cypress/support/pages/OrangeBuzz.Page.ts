export class OrangeBuzzPage {
	newFeedPosts: () => Cypress.Chainable<JQuery<HTMLElement>>;
	feedItems: () => Cypress.Chainable<JQuery<HTMLElement>>;
	constructor() {
		this.newFeedPosts = () => cy.get('.orangehrm-buzz-newsfeed-posts');
		this.feedItems = () => this.newFeedPosts().find('[class*=grid-item]:not([class*=noposts])');
	}

	visit() {
		cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/buzz/viewBuzz');
		this.newFeedPosts().should('be.visible');
	}

	postIsLiked(arg: { givenItem: JQuery<HTMLElement> }) {
		return cy
			.wrap(arg.givenItem)
			.find('.orangehrm-buzz-post-actions')
			.children()
			.eq(0)
			.then(likeButton => {
				return likeButton.hasClass('orangehrm-like-animation');
			});
	}

	likePost(arg: { givenItem: JQuery<HTMLElement> }) {
		cy.wrap(arg.givenItem).find('.orangehrm-buzz-post-actions #heart-svg').click();
		// eslint-disable-next-line cypress/no-unnecessary-waiting
		cy.wait(2000); //animation wait is required
	}

	getPostLikeCount(arg: { givenItem: JQuery<HTMLElement> }) {
		return cy.wrap(arg.givenItem).find('.orangehrm-buzz-stats-row').find('p').contains('Like').invoke('text');
	}
}
