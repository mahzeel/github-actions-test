/// <reference types="Cypress" />
import {login} from "../../cypress/fixtures/selectors.js";

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe("GIVEN I'M IN LANDING PAGE", function () {
  beforeEach(function () {
    cy.visit('/')

  })

    it("I SHOULD BE ABLE TO LOGIN", function () {


    })
  })
  
