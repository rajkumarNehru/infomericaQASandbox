describe('Book a ticket', ()=>{
    it('One way ticket', ()=>{
        cy.visit('https://www.thalys.com/choose-your-language-and-your-country');
        cy.get('#popin_tc_privacy_container_button').click();
        cy.get('.matrix-arrow-down').eq(2).click();
        cy.get('a[href="de/en"]').click();
    })
})