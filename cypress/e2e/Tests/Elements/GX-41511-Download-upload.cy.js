import { download } from "../Widgets/GX-41511-Download.cy";

describe('ToolsQA | Elements | Upload and Download', () => {
    beforeEach(() => {
        cy.visit('/upload-download')
        cy.url().should('contain', 'upload-download')
    });
    it('41511 | TC1: Validar Download Button', () => {
        download.downloadBttn()
    });
    it('41511 | TC2: Validar Upload Choose File Button', () => {
        download.upload()
    })
})