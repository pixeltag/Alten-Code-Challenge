import React from 'react';

describe ('Testing App is running probably', () => {

    beforeEach(() => {
        cy.visit('/')
      })

    it('Visit the app and reload it correctly' , () => {
        cy
            .get('.makeStyles-heading-4').contains('Found 7 Vehicles')
            .get('.MuiTableBody-root').should('have.length', 3)
            .get('.makeStyles-carText-292').should('have.length', 3)
    });

    it('The app can be reload', () => {
        cy.reload();
    });

    it('The Header is exist and works probably' , () => {
        cy
            .get('header').should('have.length', 1)
            .get('.makeStyles-logo-15').should('have.length', 1)
            .get('.makeStyles-link-13').should('have.length', 2)
    });

    it('The map is exists and works fine' , () => {
        cy
            .get('iframe' , { timeout: 10000 }).should('have.length', 1)
    });

    it('Localization works fine' , () => {
        cy
            .get('[data-cy-num-vehicles]' , { timeout: 10000 }).contains('Found 7 Vehicles')
            .get('[data-cy-btn-switcher]').should('have.length', 1)
            .click({ waitForAnimations: false })
            .get('[data-cy-num-vehicles]').contains('hittades 7 fordon')
    });

    it('The fullscreen works fine' , () => {
        cy
            .get('[data-cy-btn-fullscreen]' , { timeout: 10000 })
            .click({ waitForAnimations: false })
    })

    it('The customer filter works as expected' , () => {
        cy
            .get('.materialDD__indicators' , { timeout: 10000 })
            .click({ waitForAnimations: false })
            .type("{enter}")
    });

  });