class BrokenLinks{

    get={
        ValidImage: ()=> cy.get('[class^="col-12"] [src$="/Toolsqa.jpg"]'),
        BrokedImage: ()=> cy.get('[src$="/Toolsqa_1.jpg"]'),
        AllLinks: numberLink => cy.get('[class^="col-12"] a').eq(`${numberLink}`)

    }

    
    clickLink(numberLink){
        this.get.AllLinks(numberLink-1).click();
    }


}

export const brokenL = new BrokenLinks();
