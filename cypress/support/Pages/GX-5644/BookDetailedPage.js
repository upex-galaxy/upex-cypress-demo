export class BookDetailPage{
    constructor(){
        this.addtocollection='button[id="addNewRecordButton"]'
    }
    CheckaddButton(){
        return cy.get(this.addtocollection);
    }
}