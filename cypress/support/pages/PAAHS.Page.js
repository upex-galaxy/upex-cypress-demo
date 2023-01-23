class Phone_Adress_Attach_Hobies {

    typeTelephoneNumber(number){
        cy.get('#userNumber').type(number)

    }

    typeCurrent(current){
        cy.get('#currentAddress').type(current)
    }  

    selectHobbies(){
        cy.get('label[for="hobbies-checkbox-1"]').click()
    }

    attachFile(){
        cy.get('#uploadPicture').attachFile('images/upexlogo.png')
    }

    typeSubjects(subject){
        cy.get('#subjectsContainer').type(subject)

    }



}


export const paahs = new Phone_Adress_Attach_Hobies