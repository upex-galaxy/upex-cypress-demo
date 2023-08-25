import { removeLogs } from '@helper/RemoveLogs';
import { calculatorPage} from '@pages/paypal/GX-30984_CalculatorPage';

describe('', () => {
	beforeEach('', () => {
		cy.visit('https://vendercomprardolares.com/calculadora-comisiones-paypal.php');
        
        
        calculatorPage.get.paypalComission().should("have.value","")
    
    });

	it.skip();
});
removeLogs();
