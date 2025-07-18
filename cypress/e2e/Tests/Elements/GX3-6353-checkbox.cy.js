describe('GX3-6353: ToolsQA | Elements | Checkbox ',()=>{
    beforeEach('PRC: El usuario debe estar situado en demoqa checkbox',()=>{
        cy.visit('https://demoqa.com/checkbox');
        cy.url().should('contain','checkbox');


    });
    it('GX3-6355 | TC1:Validar expandir y contraer la carpeta de home desde los botones "expand all" y "collapse all"',()=>{
        cy.get('button.rct-option.rct-option-expand-all').click();
        cy.contains('Desktop').should('be.visible')
        cy.get('button.rct-option.rct-option-collapse-all').click();
    })
    it('GX3-6355 | TC2. Validar expandir y contraer la carpeta home y al seleccionar check se marquen las carpetas Desktop, Documents y Downloads',()=>{
        cy.get('svg.rct-icon.rct-icon-expand-close').click();
        cy.get('.rct-icon.rct-icon-uncheck').eq(0).click()
        cy.contains('Desktop').should('be.visible');
        cy.contains('Documents').should('be.visible');
        cy.contains('Downloads').should('be.visible');
        cy.get('#result').should('contain.text', 'You have selected :homedesktopnotescommandsdocumentsworkspacereactangularveuofficepublicprivateclassifiedgeneraldownloadswordFileexcelFile');
    })
    it('GX3-6355 | TC3: Validar expandir y contraer la carpeta Desktop y al hacer check se marquen los archivos Notes y Commands',()=>{
        cy.get('svg.rct-icon.rct-icon-expand-close').click();
        cy.get('svg.rct-icon.rct-icon-expand-close').eq(0).click();
        cy.contains('Notes').should('be.visible');
        cy.contains('Commands').should('be.visible');
        cy.contains('Desktop').should('be.visible');
        cy.get('svg.rct-icon.rct-icon-uncheck').eq(1).click();
        cy.get('#result').should('contain.text','You have selected :desktopnotescommands');

    })
    it('GX3-6355 | TC4: Validar expandir y contraer la carpeta Documents y la hacer check se marquen las subcarpetas workspace y office',()=>{
        cy.get('svg.rct-icon.rct-icon-expand-close').click();
        cy.get('svg.rct-icon.rct-icon-expand-close').eq(1).click();
        cy.contains('WorkSpace').should('be.visible');
        cy.contains('Office').should('be.visible');
        cy.contains('Documents').should('be.visible');
        cy.get('svg.rct-icon.rct-icon-uncheck').eq(2).click();
        cy.get('#result').should('contain.text','You have selected :documentsworkspacereactangularveuofficepublicprivateclassifiedgeneral');
    })
    it('GX3-6355 | TC5: Validar expandir y contraer la subcarpeta WorkSapce y al hacer click se marquen los archivos React, Angular y Veu',()=>{
        cy.get('svg.rct-icon.rct-icon-expand-close').click();
        cy.get('svg.rct-icon.rct-icon-expand-close').eq(1).click();
        cy.get('svg.rct-icon.rct-icon-expand-close').eq(1).click();
        cy.contains('React').should('be.visible');
        cy.contains('Angular').should('be.visible');
        cy.contains('Veu').should('be.visible');
        cy.contains('WorkSpace').should('be.visible');
        cy.get('svg.rct-icon.rct-icon-uncheck').eq(3).click();
        cy.get('#result').should('contain.text','You have selected :workspacereactangularveu');
    })
    it('GX3-6355 | TC6: Validar expandir y contraer la subcarpeta Office y al hacer click se marquen los archivos Public, General, Private y Classified',()=>{
        cy.get('svg.rct-icon.rct-icon-expand-close').click();
        cy.get('svg.rct-icon.rct-icon-expand-close').eq(1).click();
        cy.get('svg.rct-icon.rct-icon-expand-close').eq(2).click();
        cy.contains('Public').should('be.visible');
        cy.contains('Private').should('be.visible');
        cy.contains('Classified').should('be.visible');
        cy.contains('General').should('be.visible');
        cy.contains('Office').should('be.visible');
         cy.get('svg.rct-icon.rct-icon-uncheck').eq(4).click();
        cy.get('#result').should('contain.text','You have selected :officepublicprivateclassifiedgeneral');

    })
    it('GX3-6355 | TC7: Validar expandir y contraer la subcarpeta Downloads y al hacer click se marquen los archivos Word File.doc y Excel File.doc',()=>{
        cy.get('svg.rct-icon.rct-icon-expand-close').click();
        cy.get('svg.rct-icon.rct-icon-expand-close').eq(2).click();
        cy.contains('Word File.doc').should('be.visible');
        cy.contains('Excel File.doc').should('be.visible');
        cy.contains('Downloads').should('be.visible');
        cy.get('svg.rct-icon.rct-icon-uncheck').eq(3).click();
        cy.get('#result').should('contain.text','You have selected :downloadswordFileexcelFile');
    })
})