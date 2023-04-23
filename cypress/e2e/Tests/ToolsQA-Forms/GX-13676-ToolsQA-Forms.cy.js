import { form } from '@pages/Form.Page';

describe('✅ToolsQA | Forms | Practice Form', () => {
	beforeEach('Usuario debe estar situado en la pagina de Form', () => {
		cy.visit('/automation-practice-form');
	});

	it('13677 | TC1:  Validar que todos los campos completados correctamente aparecen en el Pop-up', () => {
		cy.fixture('data/Form').then(the => {
			form.enterFirst_name(the.first_name.valid);
			form.elements.first_nameInput().should('have.value', the.first_name.valid);

			form.enterLast_name(the.last_name.valid);
			form.elements.last_nameInput().invoke('val').should('eq', the.last_name.valid);

			form.enterEmail(the.email.valid);
			form.elements.emailInput().should('have.value', the.email.valid);

			form.enterNumbrePhone(the.Mobile_number.valid);
			form.elements.numberPhoneInput().invoke('val').should('contain', the.Mobile_number.valid);

			form.RadiobttnSelect(the.Gender.Male);
			form.elements
				.radioButton()
				.invoke('val')
				.then(gender => {
					expect(gender).to.equal('Male');
				});

			form.dataPickButton();

			form.yearSelect(the.Year.valid);
			form.elements.yearSelectDropdown().should('contain', the.Year.valid);

			form.monthSelect(the.Month.valid);
			form.elements.monthSelectDropdown().should('have.value', the.Month.AugustIndex);

			form.DaySelect(the.Day.valid_Index);
			//form.elements.DaySelectDropdown().eq(25).invoke('text').should('include', the.Day.DayValue21);

			form.EnterSubjects(the.Subjects.valid);
			form.elements.SubjectValue().invoke('text').should('include', the.Subjects.valid);

			form.sportHobbieLabel();
			form.elements.sportHobbieLabelElement().invoke('text').should('eq', the.Hobbies.Sport);

			form.chosseFile(the.Image.PathUpexLogo);
			form.elements.chosseFileInput().invoke('val').should('include', the.Image.UpexLogoValue);

			form.CurrentAddress(the.CurrentAddress.Groove);
			form.elements.currentAddressInput().invoke('val').should('deep.equal', the.CurrentAddress.Groove);

			form.Select_State(the.State.Uttar);
			form.elements.Select_StateAndCityValue().invoke('text').should('equal', the.State.Uttar);

			form.Select_City(the.City.Lucknow);
			form.elements.Select_City_Container().within(() => {
				form.elements.Select_StateAndCityValue().invoke('text').should('contain', the.City.Lucknow);
			});

			form.submit();

			form.PopupValues(1)
				.invoke('text')
				.then(infoPopUp => {
					expect(infoPopUp).to.include(the.first_name.valid);
					expect(infoPopUp).to.include(the.last_name.valid);
				});
			form.PopupValues(3)
				.invoke('text')
				.then(infoPopUp => {
					expect(infoPopUp).to.include(the.email.valid);
				});
			form.PopupValues(5)
				.invoke('text')
				.then(infoPopUp => {
					expect(infoPopUp).to.contain(the.Gender.Male1);
				});
			form.PopupValues(7)
				.invoke('text')
				.then(infoPopUp => {
					expect(infoPopUp).to.equal(the.Mobile_number.valid);
				});
			form.PopupValues(9)
				.invoke('text')
				.then(infoPopup => {
					expect(infoPopup).to.include(the.Day.DayValue21);
					expect(infoPopup).to.include(the.Month.valid);
					expect(infoPopup).to.include(the.Year.valid);
				});
			form.PopupValues(11)
				.invoke('text')
				.then(infoPopUp => {
					expect(infoPopUp).to.equal(the.Subjects.valid);
				});

			form.PopupValues(13)
				.invoke('text')
				.then(infoPopUp => {
					expect(infoPopUp).to.deep.eq(the.Hobbies.Sport);
				});
			form.PopupValues(15)
				.invoke('text')
				.then(infoPopUp => {
					expect(infoPopUp).to.include(the.Image.UpexLogoValue);
				});
			form.PopupValues(17)
				.invoke('text')
				.then(infoPopUp => {
					expect(infoPopUp).to.include(the.CurrentAddress.Groove);
				});
			form.PopupValues(19)
				.invoke('text')
				.then(infoPopUp => {
					expect(infoPopUp).to.contain(the.State.Uttar);
					expect(infoPopUp).to.contain(the.City.Lucknow);
				});
		});
	});
	it('13677 | TC2: Validar NO registro en el Form cuándo el campo Firts Name está vacio', () => {
		cy.fixture('data/Form').then(the => {
			form.enterFirst_name(the.first_name.invalid);

			form.enterLast_name(the.last_name.valid);
			form.elements.last_nameInput().invoke('val').should('eq', the.last_name.valid);

			form.enterEmail(the.email.valid);
			form.elements.emailInput().should('have.value', the.email.valid);

			form.enterNumbrePhone(the.Mobile_number.valid);
			form.elements.numberPhoneInput().invoke('val').should('contain', the.Mobile_number.valid);

			form.RadiobttnSelect(the.Gender.Male);
			form.elements
				.radioButton()
				.invoke('val')
				.then(gender => {
					expect(gender).to.equal('Male');
				});

			form.dataPickButton();

			form.yearSelect(the.Year.valid);
			form.elements.yearSelectDropdown().should('contain', the.Year.valid);

			form.monthSelect(the.Month.valid);
			form.elements.monthSelectDropdown().should('have.value', the.Month.AugustIndex);

			form.DaySelect(the.Day.valid_Index);

			form.EnterSubjects(the.Subjects.valid);
			form.elements.SubjectValue().invoke('text').should('include', the.Subjects.valid);

			form.sportHobbieLabel();
			form.elements.sportHobbieLabelElement().invoke('text').should('eq', the.Hobbies.Sport);

			form.chosseFile(the.Image.PathUpexLogo);
			form.elements.chosseFileInput().invoke('val').should('include', the.Image.UpexLogoValue);

			form.CurrentAddress(the.CurrentAddress.Groove);
			form.elements.currentAddressInput().invoke('val').should('deep.equal', the.CurrentAddress.Groove);

			form.Select_State(the.State.Uttar);
			form.elements.Select_StateAndCityValue().invoke('text').should('equal', the.State.Uttar);

			form.Select_City(the.City.Lucknow);
			form.elements.Select_City_Container().within(() => {
				form.elements.Select_StateAndCityValue().invoke('text').should('contain', the.City.Lucknow);
			});

			form.submit();

			form.elements.PopupValuesSelector().should('not.exist');
		});
	});

	it('13677 | TC3: Validar NO registro en el Form cuándo el campo Last Name está vacio', () => {
		cy.fixture('data/Form').then(the => {
			form.enterFirst_name(the.first_name.valid);
			form.elements.first_nameInput().should('have.value', the.first_name.valid);

			form.enterLast_name(the.last_name.invalid);

			form.enterEmail(the.email.valid);
			form.elements.emailInput().should('have.value', the.email.valid);

			form.enterNumbrePhone(the.Mobile_number.valid);
			form.elements.numberPhoneInput().invoke('val').should('contain', the.Mobile_number.valid);

			form.RadiobttnSelect(the.Gender.Male);
			form.elements
				.radioButton()
				.invoke('val')
				.then(gender => {
					expect(gender).to.equal('Male');
				});

			form.dataPickButton();

			form.yearSelect(the.Year.valid);
			form.elements.yearSelectDropdown().should('contain', the.Year.valid);

			form.monthSelect(the.Month.valid);
			form.elements.monthSelectDropdown().should('have.value', the.Month.AugustIndex);

			form.DaySelect(the.Day.valid_Index);

			form.EnterSubjects(the.Subjects.valid);
			form.elements.SubjectValue().invoke('text').should('include', the.Subjects.valid);

			form.sportHobbieLabel();
			form.elements.sportHobbieLabelElement().invoke('text').should('eq', the.Hobbies.Sport);

			form.chosseFile(the.Image.PathUpexLogo);
			form.elements.chosseFileInput().invoke('val').should('include', the.Image.UpexLogoValue);

			form.CurrentAddress(the.CurrentAddress.Groove);
			form.elements.currentAddressInput().invoke('val').should('deep.equal', the.CurrentAddress.Groove);

			form.Select_State(the.State.Uttar);
			form.elements.Select_StateAndCityValue().invoke('text').should('equal', the.State.Uttar);

			form.Select_City(the.City.Lucknow);
			form.elements.Select_City_Container().within(() => {
				form.elements.Select_StateAndCityValue().invoke('text').should('contain', the.City.Lucknow);
			});

			form.submit();

			form.elements.PopupValuesSelector().should('not.exist');
		});
	});

	it('13677 | TC4: Validar NO registro en el Form cuándo el campo Email no contiene “@“', () => {
		cy.fixture('data/Form').then(the => {
			form.enterFirst_name(the.first_name.valid);
			form.elements.first_nameInput().should('have.value', the.first_name.valid);

			form.enterLast_name(the.last_name.valid);
			form.elements.last_nameInput().invoke('val').should('eq', the.last_name.valid);

			form.enterEmail(the.email.invalid);

			form.enterNumbrePhone(the.Mobile_number.valid);
			form.elements.numberPhoneInput().invoke('val').should('contain', the.Mobile_number.valid);

			form.RadiobttnSelect(the.Gender.Male);
			form.elements
				.radioButton()
				.invoke('val')
				.then(gender => {
					expect(gender).to.equal('Male');
				});

			form.dataPickButton();

			form.yearSelect(the.Year.valid);
			form.elements.yearSelectDropdown().should('contain', the.Year.valid);

			form.monthSelect(the.Month.valid);
			form.elements.monthSelectDropdown().should('have.value', the.Month.AugustIndex);

			form.DaySelect(the.Day.valid_Index);

			form.EnterSubjects(the.Subjects.valid);
			form.elements.SubjectValue().invoke('text').should('include', the.Subjects.valid);

			form.sportHobbieLabel();
			form.elements.sportHobbieLabelElement().invoke('text').should('eq', the.Hobbies.Sport);

			form.chosseFile(the.Image.PathUpexLogo);
			form.elements.chosseFileInput().invoke('val').should('include', the.Image.UpexLogoValue);

			form.CurrentAddress(the.CurrentAddress.Groove);
			form.elements.currentAddressInput().invoke('val').should('deep.equal', the.CurrentAddress.Groove);

			form.Select_State(the.State.Uttar);
			form.elements.Select_StateAndCityValue().invoke('text').should('equal', the.State.Uttar);

			form.Select_City(the.City.Lucknow);
			form.elements.Select_City_Container().within(() => {
				form.elements.Select_StateAndCityValue().invoke('text').should('contain', the.City.Lucknow);
			});

			form.submit();

			form.elements.PopupValuesSelector().should('not.exist');
		});
	});

	it('13677 | TC5: Validar NO registro en el Form cuándo el campo Email no contiene mínimo 1 carácter alfanumérico antes del “@“', () => {
		cy.fixture('data/Form').then(the => {
			form.enterFirst_name(the.first_name.valid);
			form.elements.first_nameInput().should('have.value', the.first_name.valid);

			form.enterLast_name(the.last_name.valid);
			form.elements.last_nameInput().invoke('val').should('eq', the.last_name.valid);

			form.enterEmail(the.email.invalid2);

			form.enterNumbrePhone(the.Mobile_number.valid);
			form.elements.numberPhoneInput().invoke('val').should('contain', the.Mobile_number.valid);

			form.RadiobttnSelect(the.Gender.Male);
			form.elements
				.radioButton()
				.invoke('val')
				.then(gender => {
					expect(gender).to.equal('Male');
				});

			form.dataPickButton();

			form.yearSelect(the.Year.valid);
			form.elements.yearSelectDropdown().should('contain', the.Year.valid);

			form.monthSelect(the.Month.valid);
			form.elements.monthSelectDropdown().should('have.value', the.Month.AugustIndex);

			form.DaySelect(the.Day.valid_Index);

			form.EnterSubjects(the.Subjects.valid);
			form.elements.SubjectValue().invoke('text').should('include', the.Subjects.valid);

			form.sportHobbieLabel();
			form.elements.sportHobbieLabelElement().invoke('text').should('eq', the.Hobbies.Sport);

			form.chosseFile(the.Image.PathUpexLogo);
			form.elements.chosseFileInput().invoke('val').should('include', the.Image.UpexLogoValue);

			form.CurrentAddress(the.CurrentAddress.Groove);
			form.elements.currentAddressInput().invoke('val').should('deep.equal', the.CurrentAddress.Groove);

			form.Select_State(the.State.Uttar);
			form.elements.Select_StateAndCityValue().invoke('text').should('equal', the.State.Uttar);

			form.Select_City(the.City.Lucknow);
			form.elements.Select_City_Container().within(() => {
				form.elements.Select_StateAndCityValue().invoke('text').should('contain', the.City.Lucknow);
			});

			form.submit();

			form.elements.PopupValuesSelector().should('not.exist');
		});
	});

	it('13677 | TC6: Validar NO registro en el Form cuándo el campo Email no contiene mínimo 1 carácter alfanumérico después del “@"', () => {
		cy.fixture('data/Form').then(the => {
			form.enterFirst_name(the.first_name.valid);
			form.elements.first_nameInput().should('have.value', the.first_name.valid);

			form.enterLast_name(the.last_name.valid);
			form.elements.last_nameInput().invoke('val').should('eq', the.last_name.valid);

			form.enterEmail(the.email.invalid3);

			form.enterNumbrePhone(the.Mobile_number.valid);
			form.elements.numberPhoneInput().invoke('val').should('contain', the.Mobile_number.valid);

			form.RadiobttnSelect(the.Gender.Male);
			form.elements
				.radioButton()
				.invoke('val')
				.then(gender => {
					expect(gender).to.equal('Male');
				});

			form.dataPickButton();

			form.yearSelect(the.Year.valid);
			form.elements.yearSelectDropdown().should('contain', the.Year.valid);

			form.monthSelect(the.Month.valid);
			form.elements.monthSelectDropdown().should('have.value', the.Month.AugustIndex);

			form.DaySelect(the.Day.valid_Index);

			form.EnterSubjects(the.Subjects.valid);
			form.elements.SubjectValue().invoke('text').should('include', the.Subjects.valid);

			form.sportHobbieLabel();
			form.elements.sportHobbieLabelElement().invoke('text').should('eq', the.Hobbies.Sport);

			form.chosseFile(the.Image.PathUpexLogo);
			form.elements.chosseFileInput().invoke('val').should('include', the.Image.UpexLogoValue);

			form.CurrentAddress(the.CurrentAddress.Groove);
			form.elements.currentAddressInput().invoke('val').should('deep.equal', the.CurrentAddress.Groove);

			form.Select_State(the.State.Uttar);
			form.elements.Select_StateAndCityValue().invoke('text').should('equal', the.State.Uttar);

			form.Select_City(the.City.Lucknow);
			form.elements.Select_City_Container().within(() => {
				form.elements.Select_StateAndCityValue().invoke('text').should('contain', the.City.Lucknow);
			});

			form.submit();

			form.elements.PopupValuesSelector().should('not.exist');
		});
	});

	it('13677 | TC7: Validar NO registro en el Form cuándo el campo Email no contiene "." después de 1 carácter alfanumérico después de “@”', () => {
		cy.fixture('data/Form').then(the => {
			form.enterFirst_name(the.first_name.valid);
			form.elements.first_nameInput().should('have.value', the.first_name.valid);

			form.enterLast_name(the.last_name.valid);
			form.elements.last_nameInput().invoke('val').should('eq', the.last_name.valid);

			form.enterEmail(the.email.invalid4);

			form.enterNumbrePhone(the.Mobile_number.valid);
			form.elements.numberPhoneInput().invoke('val').should('contain', the.Mobile_number.valid);

			form.RadiobttnSelect(the.Gender.Male);
			form.elements
				.radioButton()
				.invoke('val')
				.then(gender => {
					expect(gender).to.equal('Male');
				});

			form.dataPickButton();

			form.yearSelect(the.Year.valid);
			form.elements.yearSelectDropdown().should('contain', the.Year.valid);

			form.monthSelect(the.Month.valid);
			form.elements.monthSelectDropdown().should('have.value', the.Month.AugustIndex);

			form.DaySelect(the.Day.valid_Index);

			form.EnterSubjects(the.Subjects.valid);
			form.elements.SubjectValue().invoke('text').should('include', the.Subjects.valid);

			form.sportHobbieLabel();
			form.elements.sportHobbieLabelElement().invoke('text').should('eq', the.Hobbies.Sport);

			form.chosseFile(the.Image.PathUpexLogo);
			form.elements.chosseFileInput().invoke('val').should('include', the.Image.UpexLogoValue);

			form.CurrentAddress(the.CurrentAddress.Groove);
			form.elements.currentAddressInput().invoke('val').should('deep.equal', the.CurrentAddress.Groove);

			form.Select_State(the.State.Uttar);
			form.elements.Select_StateAndCityValue().invoke('text').should('equal', the.State.Uttar);

			form.Select_City(the.City.Lucknow);
			form.elements.Select_City_Container().within(() => {
				form.elements.Select_StateAndCityValue().invoke('text').should('contain', the.City.Lucknow);
			});

			form.submit();

			form.elements.PopupValuesSelector().should('not.exist');
		});
	});

	it('13677 | TC8: Validar NO registro en el Form cuándo el campo Email no contiene mínimo 2 caracteres alfanuméricos después de “.”', () => {
		cy.fixture('data/Form').then(the => {
			form.enterFirst_name(the.first_name.valid);
			form.elements.first_nameInput().should('have.value', the.first_name.valid);

			form.enterLast_name(the.last_name.valid);
			form.elements.last_nameInput().invoke('val').should('eq', the.last_name.valid);

			form.enterEmail(the.email.invalid5);

			form.enterNumbrePhone(the.Mobile_number.valid);
			form.elements.numberPhoneInput().invoke('val').should('contain', the.Mobile_number.valid);

			form.RadiobttnSelect(the.Gender.Male);
			form.elements
				.radioButton()
				.invoke('val')
				.then(gender => {
					expect(gender).to.equal('Male');
				});

			form.dataPickButton();

			form.yearSelect(the.Year.valid);
			form.elements.yearSelectDropdown().should('contain', the.Year.valid);

			form.monthSelect(the.Month.valid);
			form.elements.monthSelectDropdown().should('have.value', the.Month.AugustIndex);

			form.DaySelect(the.Day.valid_Index);

			form.EnterSubjects(the.Subjects.valid);
			form.elements.SubjectValue().invoke('text').should('include', the.Subjects.valid);

			form.sportHobbieLabel();
			form.elements.sportHobbieLabelElement().invoke('text').should('eq', the.Hobbies.Sport);

			form.chosseFile(the.Image.PathUpexLogo);
			form.elements.chosseFileInput().invoke('val').should('include', the.Image.UpexLogoValue);

			form.CurrentAddress(the.CurrentAddress.Groove);
			form.elements.currentAddressInput().invoke('val').should('deep.equal', the.CurrentAddress.Groove);

			form.Select_State(the.State.Uttar);
			form.elements.Select_StateAndCityValue().invoke('text').should('equal', the.State.Uttar);

			form.Select_City(the.City.Lucknow);
			form.elements.Select_City_Container().within(() => {
				form.elements.Select_StateAndCityValue().invoke('text').should('contain', the.City.Lucknow);
			});

			form.submit();

			form.elements.PopupValuesSelector().should('not.exist');
		});
	});

	it('13677 | TC9: Validar NO registro en el Form cuándo en los Radio Buttons no se selecciona ninguna opción ', () => {
		cy.fixture('data/Form').then(the => {
			form.enterFirst_name(the.first_name.valid);
			form.elements.first_nameInput().should('have.value', the.first_name.valid);

			form.enterLast_name(the.last_name.valid);
			form.elements.last_nameInput().invoke('val').should('eq', the.last_name.valid);

			form.enterEmail(the.email.valid);
			form.elements.emailInput().should('have.value', the.email.valid);

			form.enterNumbrePhone(the.Mobile_number.valid);
			form.elements.numberPhoneInput().invoke('val').should('contain', the.Mobile_number.valid);

			form.dataPickButton();

			form.yearSelect(the.Year.valid);
			form.elements.yearSelectDropdown().should('contain', the.Year.valid);

			form.monthSelect(the.Month.valid);
			form.elements.monthSelectDropdown().should('have.value', the.Month.AugustIndex);

			form.DaySelect(the.Day.valid_Index);

			form.EnterSubjects(the.Subjects.valid);
			form.elements.SubjectValue().invoke('text').should('include', the.Subjects.valid);

			form.sportHobbieLabel();
			form.elements.sportHobbieLabelElement().invoke('text').should('eq', the.Hobbies.Sport);

			form.chosseFile(the.Image.PathUpexLogo);
			form.elements.chosseFileInput().invoke('val').should('include', the.Image.UpexLogoValue);

			form.CurrentAddress(the.CurrentAddress.Groove);
			form.elements.currentAddressInput().invoke('val').should('deep.equal', the.CurrentAddress.Groove);

			form.Select_State(the.State.Uttar);
			form.elements.Select_StateAndCityValue().invoke('text').should('equal', the.State.Uttar);

			form.Select_City(the.City.Lucknow);
			form.elements.Select_City_Container().within(() => {
				form.elements.Select_StateAndCityValue().invoke('text').should('contain', the.City.Lucknow);
			});

			form.submit();

			form.elements.PopupValuesSelector().should('not.exist');
		});
	});

	it('13677 | TC10: Validar NO registro en el Form cuándo el campo Mobile Number está vacío', () => {
		cy.fixture('data/Form').then(the => {
			form.enterFirst_name(the.first_name.valid);
			form.elements.first_nameInput().should('have.value', the.first_name.valid);

			form.enterLast_name(the.last_name.valid);
			form.elements.last_nameInput().invoke('val').should('eq', the.last_name.valid);

			form.enterEmail(the.email.valid);
			form.elements.emailInput().should('have.value', the.email.valid);

			form.enterNumbrePhone(the.Mobile_number.invalid);

			form.RadiobttnSelect(the.Gender.Male);
			form.elements
				.radioButton()
				.invoke('val')
				.then(gender => {
					expect(gender).to.equal('Male');
				});

			form.dataPickButton();

			form.yearSelect(the.Year.valid);
			form.elements.yearSelectDropdown().should('contain', the.Year.valid);

			form.monthSelect(the.Month.valid);
			form.elements.monthSelectDropdown().should('have.value', the.Month.AugustIndex);

			form.DaySelect(the.Day.valid_Index);

			form.EnterSubjects(the.Subjects.valid);
			form.elements.SubjectValue().invoke('text').should('include', the.Subjects.valid);

			form.sportHobbieLabel();
			form.elements.sportHobbieLabelElement().invoke('text').should('eq', the.Hobbies.Sport);

			form.chosseFile(the.Image.PathUpexLogo);
			form.elements.chosseFileInput().invoke('val').should('include', the.Image.UpexLogoValue);

			form.CurrentAddress(the.CurrentAddress.Groove);
			form.elements.currentAddressInput().invoke('val').should('deep.equal', the.CurrentAddress.Groove);

			form.Select_State(the.State.Uttar);
			form.elements.Select_StateAndCityValue().invoke('text').should('equal', the.State.Uttar);

			form.Select_City(the.City.Lucknow);
			form.elements.Select_City_Container().within(() => {
				form.elements.Select_StateAndCityValue().invoke('text').should('contain', the.City.Lucknow);
			});

			form.submit();

			form.elements.PopupValuesSelector().should('not.exist');
		});
	});

	it.skip('13677 | TC11: Validar NO registro en el Form cuándo el campo Mobile Number tiene 9 digitos', () => {
		cy.fixture('data/Form').then(the => {
			form.enterFirst_name(the.first_name.valid);
			form.elements.first_nameInput().should('have.value', the.first_name.valid);

			form.enterLast_name(the.last_name.valid);
			form.elements.last_nameInput().invoke('val').should('eq', the.last_name.valid);

			form.enterEmail(the.email.valid);
			form.elements.emailInput().should('have.value', the.email.valid);

			form.enterNumbrePhone(the.Mobile_number.invalid2);

			form.RadiobttnSelect(the.Gender.Male);
			form.elements
				.radioButton()
				.invoke('val')
				.then(gender => {
					expect(gender).to.equal('Male');
				});

			form.dataPickButton();

			form.yearSelect(the.Year.valid);
			form.elements.yearSelectDropdown().should('contain', the.Year.valid);

			form.monthSelect(the.Month.valid);
			form.elements.monthSelectDropdown().should('have.value', the.Month.AugustIndex);

			form.DaySelect(the.Day.valid_Index);

			form.EnterSubjects(the.Subjects.valid);
			form.elements.SubjectValue().invoke('text').should('include', the.Subjects.valid);

			form.sportHobbieLabel();
			form.elements.sportHobbieLabelElement().invoke('text').should('eq', the.Hobbies.Sport);

			form.chosseFile(the.Image.PathUpexLogo);
			form.elements.chosseFileInput().invoke('val').should('include', the.Image.UpexLogoValue);

			form.CurrentAddress(the.CurrentAddress.Groove);
			form.elements.currentAddressInput().invoke('val').should('deep.equal', the.CurrentAddress.Groove);

			form.Select_State(the.State.Uttar);
			form.elements.Select_StateAndCityValue().invoke('text').should('equal', the.State.Uttar);

			form.Select_City(the.City.Lucknow);
			form.elements.Select_City_Container().within(() => {
				form.elements.Select_StateAndCityValue().invoke('text').should('contain', the.City.Lucknow);
			});

			form.submit();

			form.elements.PopupValuesSelector().should('not.exist');
		});
	});
});

import { removeLogs } from '@helper/RemoveLogs';

removeLogs();
