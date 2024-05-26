import data from "../../../fixtures/data/Elements/GX3-3423-textBox.json"
import {textBox} from '../../../support/pages/GX3-3423-textBox.Page.js'

describe('',()=>{
	beforeEach('PRC: El usuario debe estar en la página DEMOQA', ()=>{
		cy.visit('https://demoqa.com/text-box');
		cy.url().should('contain','text-box');
	});

	it('GX3-3430|TC01 usuario completa el formulario correctamente',()=>{
		textBox.inputName(data.fullName);
		textBox.inputEmail(data.EmailOK);
		textBox.inputCurrentAdress(data.currentAdress);
		textBox.inputPermanentAdress(data.permanentAdress);
		textBox.clickSubmit()

		textBox.get.uploadData().should('be.visible');
		textBox.get.outputName().should('contain.text', data.fullName);
		textBox.get.outputEmail().should('contain.text', data.EmailOK);
		textBox.get.outputCurrentAddress().should('contain.text', data.currentAdress);
		textBox.get.outputPermanAddress().should('contain.text', data.permanentAdress);
	});

	it('GX3-3430|TC02 Validar click submit sin completar formulario',()=>{
		textBox.clickSubmit()
		textBox.get.uploadData().should('not.be.visible')
	})

	it('GX3-3430|TC03 Validar formulario con campo email sin @',()=>{
		textBox.inputName(data.fullName);
		textBox.inputEmail(data.emailOutArroba);
		textBox.inputCurrentAdress(data.currentAdress);
		textBox.inputPermanentAdress(data.permanentAdress);
		textBox.clickSubmit()

		textBox.get.uploadData().should('not.be.visible')
		textBox.get.emailInput().should('have.css', 'border-color', 'rgb(255, 0, 0)')

	})

	it('GX3-3430|TC04 validar campo email sin caracteres antes del arroba',()=>{
		textBox.inputName(data.fullName);
		textBox.inputEmail(data.emailNoCharBefArroba);
		textBox.inputCurrentAdress(data.currentAdress);
		textBox.inputPermanentAdress(data.permanentAdress);
		textBox.clickSubmit()

		textBox.get.uploadData().should('not.be.visible')
		textBox.get.emailInput().should('have.css', 'border-color', 'rgb(255, 0, 0)')
	})

	it('GX3-3430|TC05 validar campo email sin caracteres despues del arroba',()=>{
		textBox.inputName(data.fullName);
		textBox.inputEmail(data.emailNoCharAfArroba);
		textBox.inputCurrentAdress(data.currentAdress);
		textBox.inputPermanentAdress(data.permanentAdress);
		textBox.clickSubmit()

		textBox.get.uploadData().should('not.be.visible')
		textBox.get.emailInput().should('have.css', 'border-color', 'rgb(255, 0, 0)')
	})

	it('GX3-3430|TC06 validar campo email sin punto',()=>{
		textBox.inputName(data.fullName);
		textBox.inputEmail(data.EmailNoPoint);
		textBox.inputCurrentAdress(data.currentAdress);
		textBox.inputPermanentAdress(data.permanentAdress);
		textBox.clickSubmit()

		textBox.get.uploadData().should('not.be.visible')
		textBox.get.emailInput().should('have.css', 'border-color', 'rgb(255, 0, 0)')
	})

	it('GX3-3430|TC07 Validar formulario con campo email con 1 caracter antes del punto',()=>{
		textBox.inputName(data.fullName);
		textBox.inputEmail(data.emailOneCharAfterP);
		textBox.inputCurrentAdress(data.currentAdress);
		textBox.inputPermanentAdress(data.permanentAdress);
		textBox.clickSubmit()

		textBox.get.uploadData().should('not.be.visible')
		textBox.get.emailInput().should('have.css', 'border-color', 'rgb(255, 0, 0)')
	})
})
