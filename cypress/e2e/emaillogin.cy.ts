describe('Email Login Component', () => {
    beforeEach(() => {
      cy.visit('/login');
    });

    it('should display the login form', () => {
      cy.get('form[name="form"]').should('be.visible');
    });

    // check weather email and password coming fields are required message
    it('should display required validation messages when fields are empty', () => {
      cy.get('button[type="submit"]').click();

      cy.contains('Email fields are required').should('be.visible')
      cy.contains('password fields are required').should('be.visible')
    });

    // Check invalid email
    it('should display an error for invalid email format', () => {
      cy.get('input[name="email"]').type('invalidemail');
      cy.get('button[type="submit"]').click();
      cy.contains('Email is invalid').should('be.visible')
    });

    // Check email validation while having password
    it('should display only email validation', () => {
      cy.get('input[name="password"]').type('123456');
      cy.get('button[type="submit"]').click();

      cy.contains('Email fields are required').should('be.visible')
    });

    // Check password validation while haing email
    it('should display only password validation', () => {
      cy.get('input[name="email"]').type('abc@gmail.com');
      cy.get('input[name="password"]').clear();
      cy.get('button[type="submit"]').click();
      cy.contains('password fields are required').should('be.visible')
    });

    // Check submit with success message
    it('should display submit sucessfully', () => {
      cy.get('input[name="email"]').clear();
      cy.get('input[name="password"]').clear();

      cy.get('input[name="email"]').type('abc@gmail.com');
      cy.get('input[name="password"]').type('12345678');
      cy.get('button[type="submit"]').click();

      cy.contains('Successfully logged in').should('be.visible')
    });

  });
