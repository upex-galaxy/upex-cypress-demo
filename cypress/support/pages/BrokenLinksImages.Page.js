class brokenLinksImages {
	get = {
		getText: () => cy.get('.row>.col-md-6>div>p'),
		getSrc: () => cy.get('.row>.col-md-6>div>img'),
		clickValid: () => cy.get('.row>.col-md-6>a'),
	};
	//Method: and return the text of the label
	getNameTag(i) {
		return this.get
			.getText()
			.eq(i)
			.then($i => {
				const text = $i.text();
				return text;
			});
	}
	//Method: get and return after split image name
	getNameImg(i) {
		return this.get
			.getSrc()
			.eq(i)
			.invoke('attr', 'src')
			.then($src => {
				expect($src).exist;
				const imgName = $src.split('/').pop();
				return imgName;
			});
	}
	//Method: get and return image properties(width, height)
	getPropertyImg(i) {
		return this.get
			.getSrc()
			.eq(i)
			.then($img => {
				const width = $img[0].naturalWidth;
				const height = $img[0].naturalHeight;
				return { width, height };
			});
	}
	clickRedirectLinkValid(i) {
		this.get.clickValid().eq(i).click();
		cy.url().should('contain', 'demoqa');
		cy.wait(1000);
	}
	/*Method: To get the dimensions of the image and send messages (Success or Fail)
	getImageDimensions(src) {
		return new Promise((resolve, reject) => {
			const image = new Image();

			image.onload = function () {
				const imageWidth = this.width;
				const imageHeight = this.height;

				resolve({ width: imageWidth, height: imageHeight, message: 'The Tools QA logo is displayed with the correct dimensions' });
			};
			image.onerror = function () {
				reject(new Error('The Tooling QA logo is NOT shown with the correct dimensions'));
			};
			image.src = src;
		});
	}*/
}
export const imagePage = new brokenLinksImages();
