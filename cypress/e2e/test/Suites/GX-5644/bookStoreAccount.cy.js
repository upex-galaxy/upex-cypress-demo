/// <reference types="cypress" />

import { RegisterPage } from '@pages/GX-5644/RegisterPage'


describe('GX-5644 ✅BookStore | Account | Crear, Obtener y Eliminar Usuario (POST-GET-DELETE)',()=>{
    
    const registerpage= new RegisterPage();
    var user= `zebass${Math.floor(Math.random()*1000)}`;
    const pass= "Zebass11245!";

    it('5645 | TC1: Validate that the user registers successfully',()=>{
        cy.request({
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
        cy.request({
            url: '/Account/v1/User',
            method: 'POST',
            failOnStatusCode: false,
            body:{
                userName: user,
                password: 'zebass'
            }
        }).then(response=>{
            assert.equal(response.status, 400);
        })
    })

    it('5645 | TC3:  Validate the user logs in successfully',()=>{
        cy.request({
            url: '/Account/v1/GenerateToken',
            mehotd: 'POST',
            body:{
                userName: user,
                password: pass,
            }
        }).then(response=>{
            expect(response.status).equal(200);
        })
    })
    
    it('5645 | TC4:  Validate the user tries to log in with invalid credentials',()=>{
        cy.request({
            url: '/Account/v1/GenerateToken',
            mehotd: 'POST',
            body:{
                userName: user,
                password: '5487774',
            }
        }).then(response=>{
            cy.log(response);
        })
    })
    
})