describe('Sample test', () => {
    it('verify logo', () => {
        cy.visit('https://www.youtube.com/') // launch project website
        cy.get('div #logo-icon').should('be.visible')
        // cy.get('input#search').type('snyder cut')
        // cy.get('button#search-icon-legacy').click()
    })
})