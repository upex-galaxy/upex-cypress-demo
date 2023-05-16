class brokenLinksImages {
	get = {
		getText: () => cy.get('.col-md-6>div>p'),
		getSrc: () => cy.get('.col-md-6>div>img'),
	};
	//Method: select an element(Paragraph)
	selectParagraphIndex(i) {
		return this.get.getText().eq(i);
	}
	//Method: get src for image
	selectImgIndex(i) {
		return this.get.getSrc().eq(i).invoke('attr', 'src');
	}
	//Method: To get the dimensions of the image and send messages (Success or Fail)
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
	}
}
export const imagePage = new brokenLinksImages();
