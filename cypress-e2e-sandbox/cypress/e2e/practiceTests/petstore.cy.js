describe('Pet Store',()=>{
    it('pet',()=>{
        cy.visit('https://petstore.octoperf.com/');
        cy.get('[href="actions/Catalog.action"]').click();
        cy.get('[href*="&categoryId=FISH"]').eq(1).click();
        cy.url().should('include','viewCategory=&categoryId=FISH');
        cy.get('#Catalog tr td a').eq(3).click();
        cy.get('[href*="&itemId=EST-20"]').click();
        cy.url().should('include','?viewItem=&itemId=EST-20');
        cy.get('.Button').click();
        cy.get('[href*="?removeItemFromCart"]').click();
        cy.get('#BackLink a').click();
        cy.url().should('include','https://petstore.octoperf.com/actions/Catalog.action');
    })
})