describe("Login", () => {
  it("Realizar Login com sucesso", () =>{
    // Arrange
    cy.visit("https://www.saucedemo.com/")

    // Act
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test=password]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()

    cy.screenshot('login')
    

    // Assert
    cy.url().should('eq','https://www.saucedemo.com/inventory.html')

  })
  
  it('Realizar Login com senha invalida', ()=> {
    // Arrange 
    cy.visit("https://www.saucedemo.com/")

    // Act
   cy.get('[data-test="username"]').type("locked_out_user")
    cy.get('[data-test=password]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
    
    cy.screenshot('login com senha invalida')

    // Assert
    cy.get('[data-test="error"]')
      .should(
        'contain',
        'Epic sadface: Sorry, this user has been locked out.'

      )
    cy.url().should('eq','https://www.saucedemo.com/')
  })
})