class brokenLinksImages {
	get = {
		getText: () => cy.get('.row>.col-md-6>div>p'),
		getSrc: () => cy.get('.row>.col-md-6>div>img'),
		getSrcValidate: () => cy.get('#app>header>a>img'),
		clickValid: () => cy.get('.col-md-6>div>a'),
	};
	/*Method: and return the text of the label
	getNameTag(i) {
		return this.get
			.getText()
			.eq(i)
			.then($i => {
				const text = $i.text();
				return text;
			});
	}
	//To apply it in the Test(OOS)
	imagePage.getNameTag(1).then($text => {
			expect($text).eq('Broken image');
		});
	*/
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
	getPropertyImg(i = null) {
		if (i !== null) {
			// If an index is provided, select the element by its position
			return this.get
				.getSrc()
				.eq(i)
				.then($img => {
					const width = $img[0].naturalWidth;
					const height = $img[0].naturalHeight;
					return { width, height };
				});
		} else {
			// If no index is provided, select the first element found
			return this.get.getSrcValidate().then($img => {
				const width = $img[0].naturalWidth;
				const height = $img[0].naturalHeight;
				return { width, height };
			});
		}
	}
	clickRedirectLink(i) {
		this.get.clickValid().eq(i).click();
	}
}
export const imagePage = new brokenLinksImages();
