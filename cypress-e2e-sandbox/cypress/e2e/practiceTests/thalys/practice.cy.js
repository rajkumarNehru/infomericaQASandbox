describe('Book a ticket', ()=>{
    it('One way ticket', ()=>{
        cy.visit('https://www.thalys.com/choose-your-language-and-your-country');
                          //cy.get('#popin_tc_privacy_button').click();
        cy.get('.matrix-arrow-down').eq(2).click();
        cy.get('a[href="de/en"]').click();
        cy.get('#edit-departurestation').type('Schi');
        cy.get('ul li[data-value="NLSPH"]').click();
        cy.get('#edit-arrivalstation').type('pari');
        cy.get('ul li[data-value="FRPNO"]').click();
      
        cy.get('#edit-onewayticket-label').click();
                          
        cy.get('#edit-departuredate').eq(0).click();
        cy.get('.ui-icon-circle-triangle-e').click();
        cy.get('.ui-icon-circle-triangle-e').click();
        cy.get('.ui-datepicker-calendar tr td').eq(23).click();

       cy.get('#edit-adult').select('3');
       cy.get('#edit-child').select('2');
       cy.get('#edit-young').select('1');
       cy.get('#edit-senior').select('1');
       cy.get('#edit-submit').click();

       cy.get('.journey-list li div.price-start-semiflex',{timeout:30000}).eq(0).click();
       cy.get('.journey-detail-validate span').click();

        cy.get('ul li').eq(0).as('1stEle');
        cy.get('@1stEle').find('#nom').type('sahithi');
        cy.get('@1stEle').find('#prenom').type('reddy');
        cy.get('@1stEle').find('#email').type('sahithi@gamil.com');
        cy.get('@1stEle').find('#telephone').type('1111111111');

        cy.get('ul li').eq(1).as('2ndEle');
        cy.get('@2ndEle').find('#nom').type('saran');
        cy.get('@2ndEle').find('#prenom').type('reddy');
        cy.get('@2ndEle').find('#email').type('saran@gamil.com');
        cy.get('@2ndEle').find('#telephone').type('2222222222');

        cy.get('ul li').eq(2).as('3rdEle');
        cy.get('@3rdEle').find('#nom').type('madhu');
        cy.get('@3rdEle').find('#prenom').type('reddy');
        cy.get('@3rdEle').find('#email').type('madhu@gamil.com');
        cy.get('@3rdEle').find('#telephone').type('3333333333');

        cy.get('ul li').eq(3).as('4thEle');
        cy.get('@4thEle').find('#nom').type('hema');
        cy.get('@4thEle').find('#prenom').type('sai');
        cy.get('@4thEle').find('#email').type('hema@gamil.com');
        cy.get('@4thEle').find('#telephone').type('3333333333');

        cy.get('ul li').eq(4).as('5thEle');
        cy.get('@5thEle').find('#nom').type('prem');
        cy.get('@5thEle').find('#prenom').type('kumar');
        cy.get('@5thEle').find('#email').type('prem@gamil.com');
        cy.get('@5thEle').find('#telephone').type('4444444444');

        cy.get('ul li').eq(5).as('6thEle');
        cy.get('@6thEle').find('#nom').type('keerthana');
        cy.get('@6thEle').find('#prenom').type('suharika');
        cy.get('@6thEle').find('#email').type('pinky@gamil.com');
        cy.get('@6thEle').find('#telephone').type('5555555555');

        cy.get('ul li').eq(6).as('7thEle');
        cy.get('@7thEle').find('#nom').type('xyz');
        cy.get('@7thEle').find('#prenom').type('abc');
        cy.get('@7thEle').find('#email').type('xyyz@gamil.com');
        cy.get('@7thEle').find('#telephone').type('6666666666');

        cy.get('.thalys-form-submit-btn-full-width').click();
        cy.url().should('include','booking/payment');

    //    cy.get('#nom').eq(0).type('sahithi').click();
    //    cy.get('#prenom').eq(0).type('reddy').click();
    //    cy.get('#email').eq(0).type('sahithi@gmail.com').click();
    //    cy.get('#telephone').eq(0).type('1111111111');
    //    cy.wait(10000);
       

    //    cy.get('#nom').eq(1).type('sahithi').click();
    //    cy.get('#prenom').eq(1).type('reddy').click();
    //    cy.get('#email').eq(1).type('sahithi@gmail.com').click();
    //    cy.get('#telephone').eq(1).type('1111111111');
    //    cy.wait(30000);

    //    cy.get('#nom').eq(2).type('sahithi').click();
    //    cy.get('#prenom').eq(2).type('reddy').click();
    //    cy.get('#email').eq(2).type('sahithi@gmail.com').click();
    //    cy.get('#telephone').eq(2).type('1111111111');

    //    cy.get('#nom').eq(3).type('sahithi').click();
    //    cy.get('#prenom').eq(3).type('reddy').click();
    //    cy.get('#email').eq(3).type('sahithi@gmail.com').click();
    //    cy.get('#telephone').eq(3).type('1111111111');

    //    cy.get('#nom').eq(4).type('sahithi').click();
    //    cy.get('#prenom').eq(4).type('reddy').click();
    //    cy.get('#email').eq(4).type('sahithi@gmail.com').click();
    //    cy.get('#telephone').eq(4).type('1111111111');

    //    cy.get('#nom').eq(5).type('sahithi').click();
    //    cy.get('#prenom').eq(5).type('reddy').click();
    //    cy.get('#email').eq(5).type('sahithi@gmail.com').click();
    //    cy.get('#telephone').eq(5).type('1111111111');

       
    
    })
})


