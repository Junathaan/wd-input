describe('WD Input test', function() {
  beforeEach(() => {
    cy.eyesOpen({
      appName: 'WD Input',
      browser: { width: 800, height: 600 },
    });
  });

  afterEach(() => {
    cy.eyesClose();
  });

  it('increments by clicking the + button', function() {
    cy.visit('http://localhost:8080');

    cy.eyesCheckWindow('Main Page');

    cy.get('.tw_input__button').contains('+').click();

    cy.eyesCheckWindow('Increment !');

    cy.get('input[name="tw-input"]').should('have.value', '1');
  });

  it('decrements by clicking the - button', function() {
    cy.visit('http://localhost:8080');

    cy.eyesCheckWindow('Main Page');

    cy.get('.tw_input__button').contains('-').click();

    cy.eyesCheckWindow('Decrement !');

    cy.get('input[name="tw-input"]').should('have.value', '-1');
  });
})
