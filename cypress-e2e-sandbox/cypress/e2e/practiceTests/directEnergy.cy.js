describe('Direct Energy Test Suite', ()=>{

    Cypress.config({
        "defaultCommandTimeout": 10000,
        "pageLoadTimeout": 60000
    })

    it('First Test', ()=>{
        cy.visit('https://www.directenergy.com/');
        cy.get('.side-container [name="zipcode"]').clear().type('77042');
        cy.get('.side-container button.button-lightgreen').click();
        cy.get('app-loading-spinner').should('not.exist', {timeout: 10000}).then(()=>{
            cy.get('a[href="#plan-grid"]:first-child').should('exist');
        })
})

})