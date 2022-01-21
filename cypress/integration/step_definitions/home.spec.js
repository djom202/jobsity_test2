// Cypress reference
/// <reference types="cypress" />
// Given
import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'

Given('I open Github page', () => {
    cy.viewport('macbook-13')
    cy.visit('/')
})

When('I set {string} into the search field', (key) => {
    cy.get('.header-search-input').type(key).type('{enter}')
})

When('I click on the Advance search link', () => {
    cy.get('.mt-3.d-none.d-md-block .f6').first().click()
})

When('I set written language as {string}', (key) => {
    cy.get('#search_language').select(key, {
        force: true,
    })
})

When('I set state as {string}', (key) => {
    cy.get('#search_state').select(key)
})

When('I set many stars as {string}', (key) => {
    cy.get('#search_stars').type(key)
})

When('I set many followers as {string}', (key) => {
    cy.get('#search_followers').type(key)
})

When('I set license as {string}', (key) => {
    cy.get('#search_license').select(key)
})

When('I click on the Search button', () => {
    cy.get('button[type="submit"]').eq(1).click()
})

Then('I verify that there is only {int} repository result', (results) => {
    cy.get('.repo-list>li').its('length').should('be.eq', results)
})

Then('I verify that the result list includes this repository', () => {
    cy.get('.repo-list>li').eq(0).contains('mvoloskov/decider')
})

Then('I navigate to the repository page', () => {
    cy.get('.repo-list>li').eq(0).find('.v-align-middle').click()
})

Then('I print the first 300 characters of the README', () => {
    // I'm not sure what is the scope for this step
})
