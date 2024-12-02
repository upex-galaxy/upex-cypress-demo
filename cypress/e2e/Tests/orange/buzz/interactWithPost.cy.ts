describe('GX3-5785: Interact with post by Likes', () => {
	beforeEach(() => {
		//*---- PRC: Go to Buzz Section -----
		Cypress.config('defaultCommandTimeout', 10000);
		Cypress.config('pageLoadTimeout', 10000);
		cy.page().then(({ loginPage, buzzPage }) => {
			loginPage.loginSuccess();
			buzzPage.visit();
		});
	});

	it('GX3-5785: TC1: Should give a Like to a post', function () {
		cy.page().then(({ buzzPage }) => {
			buzzPage
				.feedItems()
				.eq(3)
				.then(givenItem => {
					buzzPage.postIsLiked({ givenItem }).then(isLiked => {
						if (isLiked) {
							buzzPage.likePost({ givenItem });
							buzzPage.postIsLiked({ givenItem }).should('be.false');
						}
					});

					buzzPage.getPostLikeCount({ givenItem }).as('likesBefore');
					buzzPage.likePost({ givenItem });

					buzzPage.getPostLikeCount({ givenItem }).then(likes => {
						const likeNum = this.likesBefore.replace(' Like');
						const expectedLikes = parseInt(likeNum) + 1;
						const actualLikes = parseInt(likes);
						expect(actualLikes).equal(expectedLikes);
					});
				});
		});
	});
});
