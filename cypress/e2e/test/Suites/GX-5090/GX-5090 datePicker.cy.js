describe('GX-5090 | ToolsQA | Widgets | Date Picker',()=>{

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min)};

    beforeEach('QA must visit datePicker page',()=>{
        cy.visit('/date-picker')
        cy.url().should('contain','date-picker')
    })

    it('TC1 | Validate default date and following format (month)(day)(year)',()=>{

        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let currentDate = `${month}/${day}/${year}`;

        //By default datePicker must have "current date"
        cy.get('#datePickerMonthYearInput').should('have.value',currentDate)
    })

    it('TC2 | Validate being able to select a year',()=>{

        cy.get('#datePickerMonthYearInput').click();
        cy.get('[class*=month-container]').within(()=>{
            cy.get('[class*=year-select]').select(getRandomInt(0,200))
        })
        
    })
    
    it('TC3 | Validate being able to select a month',()=>{

        cy.get('#datePickerMonthYearInput').click();
        cy.get('[class*=month-container]').within(()=>{
            cy.get('[class*=month-select]').select(getRandomInt(0,11))
        })
    })

    it('TC4 | Validate being able to select a day',()=>{

        cy.get('#datePickerMonthYearInput').click();
        cy.get('[class=react-datepicker__month]').within(()=>{
            cy.get('[class*=_week]').eq(getRandomInt(0,6)).children().eq(getRandomInt(0,7)).click()
        })
    })

    it('TC5 | Validate bein able change month with arrow buttons',()=>{

        cy.get('#datePickerMonthYearInput').click();
        cy.get('[class*="navigation--previous"]').click().should('have.attr','aria-label','Previous Month');
        cy.get('[class*="navigation--next"]').click().should('have.attr','aria-label','Next Month');
    })

    it.only('TC6 | Validate being able to select a specific date (month)(day)(year)',()=>{

        let yearSelected
        let monthSelected
        let daySelected
        
        cy.get('#datePickerMonthYearInput').click();
        cy.get('[class*=month-container]')
            const year = getRandomInt(0,200)
            cy.log(year)
            const month = getRandomInt(1,12)
            cy.log(month)
            const day = getRandomInt(0,6)
            cy.log(day)
            
            cy.get('[class*=year-select]').select(year).children().eq(year).then(($year)=>{
                yearSelected = $year.text()
                cy.log(yearSelected)
            })

            cy.get('[class*=month-select]').select(month).children().eq(month).then(($month)=>{
                monthSelected = $month.text()
                cy.log(monthSelected)
            })

            cy.get('[class=react-datepicker__month]')
            cy.get('[class*=_week]').eq(day).children().eq(day).click().then(($day)=>{
                daySelected = $day.text()
                cy.log(daySelected)
                cy.log(monthSelected)
                cy.log(yearSelected)

                let dateSelected = `${month+01}/${daySelected}/${yearSelected}`;
                cy.get('#datePickerMonthYearInput').should('contain.value',dateSelected)
            })
    })
})

Cypress.on('uncaught:exception', (err, runnable) => {
	// returning false here prevents Cypress from
	// failing the test
	return false
})
// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
const origLog = Cypress.log
Cypress.log = function (opts, ...other) {
	if (opts.displayName === 'xhr'|| opts.displayName === 'fetch' && opts.url.startsWith('https://')) {
		return
	}
	return origLog(opts, ...other)}