describe('pom',()=>{
    //General Approach
    it('Login to Orange HRM',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.get('input[placeholder="Username"]').type('Admin');
        cy.get('input[placeholder="Password"]').type('admin123');
        cy.get('button[type="submit"]').click();
        cy.get('div.oxd-topbar-header-title').should('have.text',"Dashboard");
    })

})