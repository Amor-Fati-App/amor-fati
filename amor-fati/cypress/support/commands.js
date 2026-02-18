/* eslint-disable no-undef */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
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

Cypress.Commands.add("getByData", (selector) => {
    return cy.get(`[data-test=${selector}]`)
})

Cypress.Commands.add('checkAccessibility', () => {
    cy.injectAxe();
    cy.checkA11y();
})


Cypress.Commands.add('testResponsiveness', (selector) => {
    const viewports = ['iphone-6', 'ipad-2', [1920, 1080]];

    viewports.forEach(viewport => {
        cy.viewport(viewport)
        cy.get(selector).should('be.visible')
    })
})


Cypress.Commands.add('verifyImageLoaded', (selector) => {
    cy.get(selector).should('be.visible').and($img => {
        expect($img[0].naturalWidth).to.be.greaterThan(0)
    })
})