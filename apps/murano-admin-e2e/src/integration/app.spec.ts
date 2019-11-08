import { getGreeting } from '../support/app.po';

describe('murano-admin', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to murano-admin!');
  });
});
