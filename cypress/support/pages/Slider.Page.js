class Slider {
	get = {
		inputSlider: () => cy.get('input[type="range"]'),
		inputSliderValue: () => cy.get('#sliderValue'),
	};
}

export const slider = new Slider();
