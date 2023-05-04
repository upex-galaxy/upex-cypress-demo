import { signup } from '@pages/SignUp.Page.js';
import { removeLogs } from '@helper/RemoveLogs';
const { signUp } = Cypress.env('endpoint');
describe('Feature', () => {
	beforeEach(() => {
		cy.visit('https://demoqa.com/selectable');
		cy.get('#demo-tab-grid').click()
	});

	it('TSID | TC1: Nico', () => {
cy.get('#demo-tabpane-grid li').then(($lis) => {
  const randomIndexes = [];

  // Generar 9 índices aleatorios únicos
  while (randomIndexes.length < 9) {
    const randomIndex = Math.floor(Math.random() * $lis.length);
    if (!randomIndexes.includes(randomIndex)) {
      randomIndexes.push(randomIndex);
    }
  }

  // Hacer clic en los elementos aleatorios uno por uno
  randomIndexes.forEach((index) => {
    const randomLi = $lis.eq(index);
    // Hacer clic en el elemento seleccionado
    randomLi.click();
    // Esperar a que se complete la acción antes de continuar
    //cy.wait(500); // Puedes ajustar el tiempo de espera según tus necesidades
  });
});
});
	});
removeLogs()