describe("assertion demo",   ()=>{

    it("implicit assertions",  ()=>{

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
     cy.url().should('include', 'orangehrmlive.com')
      .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      .and('contain','orangehrm')


    })

})