describe('GX-5090 | ToolsQA | Widgets | Date Picker',()=>{

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min)};

    beforeEach('QA must visit datePicker page',()=>{
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.viewport(1440,900)
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
        
        const year = getRandomInt(0,99)
        cy.get('#datePickerMonthYearInput').click()
        cy.get('[class*="year-select"]').select(year)
        cy.get('[class*="hasMonthDropdown"]').should('contain',year)
    })
    
    it('TC3 | Validate being able to select a month',()=>{

        let monthSelected
        const month = getRandomInt(0,11)
        cy.log(month)

        cy.get('#datePickerMonthYearInput').click();
        cy.get('[class*=month-container]').within(()=>{
            cy.get('[class*=react-datepicker__month-select]').select(month).then(($month)=>{
                monthSelected = $month.text()
                cy.wrap($month).should('have.value',month)
            })
        })
    })

    it('TC4 | Validate being able to select a day',()=>{

        let daySelected
        const day = getRandomInt(0,6)
        
        cy.get('#datePickerMonthYearInput').click();
        cy.get('[class=react-datepicker__month]')
            cy.get('[class*=_week]').eq(day).children().eq(day).then(($day)=>{
                daySelected = $day.text()
                cy.wrap($day).should('contain',daySelected).click()
        })
    })

    it('TC5 | Validate bein able change month with arrow buttons',()=>{

        cy.get('#datePickerMonthYearInput').click();
        cy.get('[class*="navigation--previous"]').click().should('have.attr','aria-label','Previous Month');
        cy.get('[class*="navigation--next"]').click().should('have.attr','aria-label','Next Month');
    })

    it('TC6 | Validate being able to select a specific date (month)(day)(year)',()=>{

        let yearSelected
        let monthSelected
        let daySelected
        
        const date = new Date();

        let currentDay = date.getDate();
        let currentMonth = date.getMonth() + 1;
        let currentYear = date.getFullYear();
        let currentDate = `${currentMonth}/${currentDay}/${currentYear}`

        cy.get('#datePickerMonthYearInput').should('have.value',currentDate).click();
        cy.get('[class*=month-container]')
            const year = getRandomInt(0,200)
            cy.log(year)
            const month = getRandomInt(0,11)+1
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
                
                cy.get('#datePickerMonthYearInput').should('not.have.value',currentDate)
            })
    })

    it('TC7 | Validate being be able to select a specific date and time',()=>{
        
        const year = getRandomInt(0,13)
        const month = getRandomInt(0,11)
        const day = getRandomInt(0,6)
        const time = getRandomInt(0,96)

        const currentDate = new Date();

        cy.get('#dateAndTimePickerInput').click()
            cy.get('[class*="react-datepicker__month-container"]')
            cy.get('[class*="react-datepicker__year-read-view--selected-year"]').click()
            cy.get('[class*="react-datepicker__year-option"]').eq(year).click()

        cy.get('[class*="react-datepicker__month-read-view--selected-month"]').click()
            cy.get('[class*="react-datepicker__month-option"]').eq(month).click()
        
        cy.get('[class*="react-datepicker__week"]').children().eq(day).click()

        cy.get('[class*="react-datepicker__time-list"]').children().eq(time).click()
        cy.get('#dateAndTimePickerInput').should('not.have.value',currentDate)

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