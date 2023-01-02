/// <reference types="cypress" />

import { BookDetailPage } from '@pages/GX-5644/BookDetailedPage';
import { LoginPage } from '@pages/GX-5644/LoginPage'
import { ProfilePage } from '@pages/GX-5644/ProfilePage'


describe('GX-5644 ✅BookStore | Account | Crear, Obtener y Eliminar Usuario (POST-GET-DELETE)',()=>{
    
    const bookdetailpage= new BookDetailPage();
    const profilepage= new ProfilePage();
    const loginpage = new LoginPage();
    var user= `zebass${Math.floor(Math.random()*100000)}`;
    const pass= "Zebass11245!";
    

    it('5645 | TC1: Validate that the user registers successfully',()=>{
        cy.api({
            url: '/Account/v1/User',
            method: 'POST',
            body:{
                userName: user,
                password: pass,
            } 
        }).then(response=>{
            cy.log(response)
            assert.equal(response.body.username, user)
            expect(response.status).equal(201);
        })
    })
    it('5645 | TC2:  Validate the user tries to register',()=>{
        cy.api({
            url: '/Account/v1/User',
            method: 'POST',
            failOnStatusCode: false,
            body:{
                userName: user,
                password: 'zebass'
            }
        }).then(response=>{
            assert.equal(response.status, 400);
            expect(response.body.message).equal("Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer.")
        })
    })
    
    it('5645 | TC3:  Validate the user logs in successfully',()=>{
        cy.request({
            url: '/Account/v1/GenerateToken',
            method: 'POST',
            body:{
                userName: user,
                password: pass,
            }
        }).then(response=>{
            cy.log(response)
            expect(response.status).equal(200);
        })
    })
    it('5645 | TC4:  Validate the user tries to log in with invalid credentials',()=>{
        cy.api({
            url: '/Account/v1/GenerateToken',
            method: 'POST',
            body:{
                userName: user,
                password: '2232323',
            }
        }).then(response=>{
            cy.log(response);
            expect(response.body.result).equal('User authorization failed.');
            assert.equal(response.body.status, 'Failed');
            expect(response.status).equal(400);
            });
    })        
    it('5645 | TC5:  Validate the user checks the content of the collection',()=>{ 
        var user5= `Cristian1122${Math.floor(Math.random()*10000)}`
        var tok;
        cy.request({
            url: '/Account/v1/User',
            method: 'POST',
            body:{
                userName: user5,
                password: pass,
            }
        }).then(response1=>{
            cy.request({
                url: '/Account/v1/GenerateToken',
                method: 'POST',
                body:{
                    userName: user5,
                    password: pass,
                }
            }).then(response2=>{  
                cy.api({
                    url: '/Bookstore/v1/Books',
                    method: 'POST',
                    auth:{
                        bearer: response2.body.token,
                        userName: user5,
                        password: pass
                    },
                    body:{
                        userId: response1.body.userID,
                        collectionOfIsbns: [
                            {
                                isbn: "9781491950296"
                            }
                        ]
                    }
                })
                tok= response2.body.token;
            }).then(response3=>{
                cy.log(response3)
                assert.equal(response3.body.books[0].isbn,9781491950296);
                cy.request({
                    url: `/Account/v1/User/${response1.body.userID}`,
                    method: 'GET',
                    auth:{
                        bearer: tok,
                        userName: user5,
                        password: pass,
                    }
                }).then(response4=>{
                cy.log(response4)
            assert.equal(response4.status, 200)
        assert.equal(response4.body.books[0].isbn,9781491950296)});
                })
        })
    })
    it.only('5645 | TC6:  Validate the user logs out',()=>{
        let user6= `Xander${Math.floor(Math.random()*10000)}`;
        cy.request({
            url: '/Account/v1/User',
            method: 'POST',
            body:{
                userName: user6,
                password: pass,
            }
        })
        cy.visit('/login')
        loginpage.UserInput(user6);
        loginpage.PassInput(pass);
        loginpage.Login();
        profilepage.UserCheck().should('have.text', user6)
        profilepage.LogOut();
        profilepage.CheckHeader().should('not.exist');
        bookdetailpage.CheckaddButton().should('not.exist');
    })

    it('5645 | TC7: Validate the user deletes his/her account',()=>{
        let userid;
        let token;
        cy.api({
            url: '/Account/v1/User',
            method: 'POST',
            body:{
                userName: 'Sebasstien12x',
                password: pass,
            } 
        }).then(response=>{
            cy.log(response)
            assert.equal(response.body.username, 'Sebasstien12x')
            expect(response.status).equal(201);
            cy.request({
                url: '/Account/v1/GenerateToken',
                method: 'POST',
                body:{
                    userName: 'Sebasstien12x',
                    password: pass
                }
            }).then(response2=>{
                cy.log(response2)
                expect(response2.status).equal(200);
                userid= response.body.userID;
                token= response2.body.token;
            }).then(response3=>{
                cy.api({
                    url:`/Account/v1/User/${userid}`,
                    method: 'DELETE',
                    auth:{
                        bearer: token,
                        userName: 'Sebasstien12x',
                        password: pass
                    }
                })
            }).then(response4=>{
                cy.log(response4);
                assert.equal(response4.status, 204);
            })
        })
    })
})

Cypress.on('uncaught:exception', (err, runnable) => {
	return false
})
// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
const origLog = Cypress.log
Cypress.log = function (opts, ...other) {
	if (opts.displayName === 'xhr'|| opts.displayName === 'fetch' && opts.url.startsWith('https://')) {
		return
	}
	return origLog(opts, ...other)
}