describe('Carrinho',()=> {
    it('Adicionar item ao carrinho', () => {
        // Arrange 
        cy.visit("https://www.saucedemo.com/")

        // Act

        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test=password]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()

        cy.screenshot('Adicionar item ao carrinho')
        


        // Assert

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_badge')
        .should('be.visible')
        .and('have.text', '1')

        cy.get('#shopping_cart_container').click()

        cy.contains('Sauce Labs Backpack').should('be.visible') 
    } )

    it('Remover item do carrinho ', () => {
        // Arrange 
        cy.visit('https://www.saucedemo.com/')

         cy.get('[data-test="username"]').type('problem_user')

        cy.get('[data-test=password]').type('secret_sauce')

        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

        cy.get('.shopping_cart_badge')
        .should('be.visible')

        // Act 
       cy.get('[data-test="remove-sauce-labs-backpack"]').click()

       cy.screenshot('Remover item do carrinho')

       // Assert
       cy.get('.shopping_cart_badge').should('not.exist')
    })




})