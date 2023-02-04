// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import 'cypress-file-upload'
import 'cypress-wait-until'
import '@4tw/cypress-drag-drop'
import 'cypress-downloadfile/lib/downloadFileCommand'
import {login} from '@pages/Login.Page'
const {authLogin, dashboardIndex} = Cypress.env('endpoint')
import {signin} from '@pages/SignIn.Page.js'

//TESTCASE1
let valuemonth= function getMonthNumberFromName(monthName) {
    return new Date(`${monthName} 1, 2022`).getMonth() ;}
let date= new Date();
let monthtext;
let getMonth= function (monthnumber) {
    date.setMonth(monthnumber);
    return date.toLocaleString('en-US', { month: 'long' })}
let thisMonth= new Date().getMonth() 
let TC2month;
let monthwithspace;
let trimmedmonth;
let trimmedyear;

let getDays= (year, month)=>{return new Date(year, month,0).getDate()};
let daysinMonth;
let Day;
let selectedyear;
let monthvalue;
let randomday;
const nth = function(d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
        case 1:  return "st";
        case 2:  return "nd";
        case 3:  return "rd";
        default: return "th";
    }
}
    let dayName= function (year, month, day) {
    const date = new Date(Date.UTC(year, month , day));
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfWeek[date.getUTCDay()];
}

let monthvalue2;
let ranyear= Cypress._.random(2018, 2028)
let randay;
let rannumber;
    
    //TestCASE 1//
    Cypress.Commands.add('SelectingMonth',()=>{

        cy.get('select[class="react-datepicker__month-select"]')
        .find('option')
        .its('length')
        .then((n)=> Cypress._.random(0, n-1 ))
        .then((k)=>{
            monthvalue=k
        cy.get('[class$=month-select]')
        .select(monthvalue)
        
        cy.get('select[class="react-datepicker__month-select"]')
        .find(`option[value="${monthvalue}"]`)
        .invoke('text')
        .then(mes=>{
            selectedmonth= mes;
            cy.log(`**The selected month is ${selectedmonth}**`)
        })
    })
    })
    Cypress.Commands.add('SelectingYear',()=>{

        cy.get('[class$=year-select]').then((yearscontainer)=>{
            cy.wrap(yearscontainer).children()
            .then((years)=>{
            randomyear= Cypress._.random(0, years.length -1)
            cy.wrap(yearscontainer).select(randomyear)
            cy.wrap(yearscontainer).should('exist')
            cy.wrap(yearscontainer).children()
            .eq(randomyear).then(year =>{
                selectedyear= year.text();
                cy.log(`**The selected year is ${selectedyear}**`)
            })    
            })
        })
        })
    Cypress.Commands.add('SelectingDate',()=>{
        
        daysinMonth= getDays(selectedyear, monthvalue+1)
        randomday= Cypress._.random(1, daysinMonth)
    
        Day= dayName(selectedyear, monthvalue, randomday )
        suffix= nth(randomday) 
        
        cy.get('div[class="react-datepicker__week"]')
        .each(($week)=>{ 
            if($week.text().includes(randomday)){
                cy.log('**Date found!**')    
                cy.get(`[aria-label="Choose ${Day}, ${selectedmonth} ${randomday}${suffix}, ${selectedyear}`)
                .click()
                return false
                }
            })
            cy.get('input[id="datePickerMonthYearInput"]').click()
        cy.get('div[class="react-datepicker__week"]')
        .each(($week)=>{ 
            if($week.text().includes(randomday)){    
                cy.get(`[aria-label="Choose ${Day}, ${selectedmonth} ${randomday}${suffix}, ${selectedyear}`)
                .should('have.css', 'background-color',
                'rgb(33, 107, 165)')
                return false
                }
            })
    })
    //**TEST CASE 2**//
        Cypress.Commands.add('SelectingMonthTC2',()=>{
        
        if(thisMonth>0 && thisMonth<=6){

            for(i=0; i<5; i++){
                cy.get('[class="react-datepicker"]')
                .find('[class$=navigation--next]').click()
            }
        }else{
            for(i=0; i<5; i++){
                cy.get('[class="react-datepicker"]')
                .find('[class$=navigation--previous]').click()
            }
        }
            cy.get('[class="react-datepicker__header"]')
            .find('[class$=-hasMonthDropdown]').then(el=>{
                monthtext= el.text()
            trimmedmonth= monthtext.replace(/\d+/g, '');
            
            TC2month=valuemonth(trimmedmonth)
            })
            })           
    
        Cypress.Commands.add('SelectingYearTC2',()=>{

            cy.get('[class$=year-select]').then((yearscontainer)=>{
                cy.wrap(yearscontainer).children()
                .then((years)=>{
                randomyear= Cypress._.random(0, years.length -1)
                cy.wrap(yearscontainer).select(randomyear)
                cy.wrap(yearscontainer).should('exist')
                cy.wrap(yearscontainer).children()
                .eq(randomyear).then(year =>{
                    selectedyear= year.text();
                    cy.log(`**The selected year is ${selectedyear}**`)
                })    
                })
            })
            })
            Cypress.Commands.add('SelectingDateTC2',()=>{
                
                
                daysinMonth= getDays(selectedyear, TC2month+1)
                cy.log(daysinMonth)
                randomday= Cypress._.random(1, daysinMonth)
            
                Day= dayName(selectedyear, TC2month, randomday )
                suffix= nth(randomday) 
                

            cy.get('div[class="react-datepicker__week"]')
            .each(($week)=>{ 
                if($week.text().includes(randomday)){
                cy.log('**Date found!**')    
                cy.get(`[aria-label="Choose ${Day}, ${trimmedmonth}${randomday}${suffix}, ${selectedyear}`)
                        .click()
                        return false
                        }
                    })
                    cy.get('input[id="datePickerMonthYearInput"]').click()
                cy.get('div[class="react-datepicker__week"]')
                .each(($week)=>{ 
                    if($week.text().includes(randomday)){    
                        cy.get(`[aria-label="Choose ${Day}, ${trimmedmonth}${randomday}${suffix}, ${selectedyear}`)
                        .should('have.css', 'background-color',
                        'rgb(33, 107, 165)')
                        return false
                        }
                    })
                })

    //**TEST 3**
    Cypress.Commands.add('MonthSelection',()=>{
        
        monthvalue2= Cypress._.random(0,11)
        
         //selection of month and its assertions.
    cy.get('input[id="dateAndTimePickerInput"]').click()
    cy.get('span[class="react-datepicker__month-read-view--down-arrow"]').click()
    cy.get('[class$=month-dropdown]')
    .children()
    .contains(getMonth(monthvalue2)).click()

    cy.get('span[class="react-datepicker__month-read-view--down-arrow"]').click()
        cy.get('[class$=month-dropdown]')
        .find('[class$=selected_month]')
        .should('have.text', `✓${getMonth(monthvalue2)}`)
    })

    Cypress.Commands.add('YearSelection',()=>{
    
        let thisYear=  date.getFullYear()
    
        //selection of year and assertion
    cy.get('input[id="dateAndTimePickerInput"]').click()
    cy.get('[class$=year-read-view--down-arrow]').click()
        ranyear= Cypress._.random(2018, 2028)
        cy.log(`**The selected year is ${ranyear}**`)
        
        if(ranyear!=thisYear){
        cy.get('[class$=year-dropdown]')
        .find('[class="react-datepicker__year-option"]')
        .contains(ranyear)
        .click()

        cy.get('input[id="dateAndTimePickerInput"]').click()
        cy.get('[class$=year-read-view--down-arrow]').click()
        cy.get('[class$=selected_year')
        .should('have.text', `✓${ranyear}`)
        .click()
        
        }else{
            cy.log(`**The year ${ranyear} was already selected by default**`)
            cy.get('[class$=selected_year')
            .should('have.text', `✓${ranyear}`)
            .click()
        }
    })

    Cypress.Commands.add('ChoosingDate',()=>{
        
        let DaysinMonth= function getDaysInMonth(year, month) {
            return new Date(year, month + 1, 0).getDate()}
            
        //Getting a random number within the number of days in 
        //the specific month of the year 
        Days= DaysinMonth(ranyear, monthvalue2)
        randay= Cypress._.random(1, Days)
        
        //Adding its corresponding suffix
        let suffix2= nth(randay)
        daynsuffix= `${randay}${suffix2}`
        
        //Getting its name of the day 
        let day2=dayName(ranyear,monthvalue2,randay)
        
        //Now we're ready to look for the date

        cy.get('[class="react-datepicker__month-container"]')
        .find('[class="react-datepicker__month"]')
        .children()
        .each(($week)=>{
            if($week.text().includes(randay)){
                cy.get(`[aria-label="Choose ${day2}, ${getMonth(monthvalue2)} ${daynsuffix}, ${ranyear}"]`).click()
                return false
            }
        })
        cy.get('[class="react-datepicker__month"]')
        .children()
        .each(($week)=>{
            if($week.text().includes(randay)){
                cy.get(`[aria-label="Choose ${day2}, ${getMonth(monthvalue2)} ${daynsuffix}, ${ranyear}"]`).should('have.css', 'background-color',
                'rgb(33, 107, 165)')
                return false
            }
        })
    })
    Cypress.Commands.add('ChoosingTime',()=>{
        // Now let's go for the time
        cy.get('[class="react-datepicker__time"]')
        .find('li')
        .its('length')
        .then((rn)=> Cypress._.random(0,rn))
        .then((rt)=>{
            let rantime= rt
            cy.get('[class="react-datepicker__time-box"]')
            .find('li')
            .eq(rantime)
            .click()
        })
        cy.get('input[id="dateAndTimePickerInput"]').click()
        cy.get('[class="react-datepicker__time"]')
        .find('[class$=item--selected]')
        .invoke('text')
        .then(time=>{
            cy.get('[class="react-datepicker__time"]')
            .find('[class$=item--selected]')
            .should('have.text', time)
            .should('have.css', 'background-color', 'rgb(33, 107, 165)')
        })
    })
//**TEST 4**//

Cypress.Commands.add('SelectingMonthTC4',()=>{
    
    rannumber= Cypress._.random(1, 12)
    if(rannumber>0 && rannumber<=6){

        for(i=0; i<5; i++){
            cy.get('[class="react-datepicker"]')
            .find('[class$=navigation--previous]').click()
        }
    }else{
        for(i=0; i<5; i++){
            cy.get('[class="react-datepicker"]')
            .find('[class$=navigation--next--with-time]').click()
        }
    }
        cy.get('[class="react-datepicker__header"]')
        .find('[class$=-hasMonthDropdown]').then(el=>{
            monthtext= el.text()
        monthwithspace= monthtext.replace(/\d+/g, '');
        trimmedmonth= monthwithspace.trim()
        trimmedyear= monthtext.replace(/[^0-9]/g, '');

        TC2month=valuemonth(trimmedmonth)
        cy.log(TC2month)
        cy.log(trimmedmonth)
        cy.log(trimmedyear)

        cy.get('span[class="react-datepicker__month-read-view--down-arrow"]').click()
        cy.get('[class$=month-dropdown]')
        .find('[class$=selected_month]')
        .should('have.text', `✓${trimmedmonth}`)
        .click()
        })
        })

        Cypress.Commands.add('ChoosingDateTC4',()=>{
            
            //Getting a random number within the number of days in 
            //the specific month of the year 
            daysinMonth= getDays(trimmedyear, valuemonth(trimmedmonth)+1)
            cy.log(daysinMonth)
            randay= Cypress._.random(1, daysinMonth)
            
            //Adding its corresponding suffix
            let suffix2= nth(randay)
            daynsuffix= `${randay}${suffix2}`
            
            //Getting its name of the day 
            let day2=dayName(trimmedyear,valuemonth(trimmedmonth),randay)
            
            //Now we're ready to look for the date
    
            cy.get('[class="react-datepicker__month-container"]')
            .find('[class="react-datepicker__month"]')
            .children()
            .each(($week)=>{
                if($week.text().includes(randay)){
                    cy.get(`[aria-label="Choose ${day2}, ${trimmedmonth} ${daynsuffix}, ${trimmedyear}"]`).click()
                    return false
                }
            })
            cy.get('[id="dateAndTimePickerInput"]').click()
            cy.get('[class="react-datepicker__month"]')
            .children()
            .each(($week)=>{
                if($week.text().includes(randay)){
                    cy.get(`[aria-label="Choose ${day2}, ${trimmedmonth} ${daynsuffix}, ${trimmedyear}"]`).should('have.css', 'background-color',
                    'rgb(33, 107, 165)')
                    return false
                }
            })
        })


// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('Login',(username,password)=>{
    cy.session('login',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php")
        cy.url().should("contain", authLogin)
        username && login.enterUsername(username)
        password && login.enterPassword(password)
        login.submitLogin()

        cy.url().should("contain", dashboardIndex)
        
    })
})


Cypress.Commands.add('SignIn', ()=>{
    const { username, password } = Cypress.env('user')
    const { signUp } = Cypress.env('endpoint')
    cy.session('signIn',()=>{
        cy.visit(signUp)
        signin.goToLoginTab()
        signin.enterUsername(username)
        signin.enterPassword(password)
        signin.submitLogin()
    })
})