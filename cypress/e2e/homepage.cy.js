describe('Homepage', () => {

  beforeEach(() => {
    cy.intercept('GET', 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=bJT1NeTocYTr6osWB9O4AXvY318qfnGt', {fixture: './home.json'})
    cy.intercept('GET', 'https://api.nytimes.com/svc/topstories/v2/books.json?api-key=bJT1NeTocYTr6osWB9O4AXvY318qfnGt', {fixture: './books.json'})
    .visit('http://localhost:3000')
  })

  it('should display the homepage header when the page loads', () => {
    cy.contains('Top Stories from the NYT')
  })

  it('should display a filter for categories when the page loads', () => {
    cy.contains('Filter by category:')
    cy.get('select').should('exist')
  })

  it('should display top stories when the page loads', () => {
    cy.get('.articleLink').should('have.length', 3)
    cy.contains("Manchin, in a Reversal, Agrees to Climate and Tax Package")
    cy.contains("What Is LIV Golf? It Depends Whom You Ask")
    cy.contains("What Fed Rate Increases Mean for Mortgages, Credit Cards and More")
    cy.get('img').should('have.length', 2)
    cy.get('img').eq(0).should('have.attr', 'src').should('include', 'https://static01.nyt.com/images/2022/07/27/us/politics/27dc-cong-01/27dc-cong-01-thumbLarge.jpg')
    cy.get('img').eq(1).should('have.attr', 'src').should('include', 'https://static01.nyt.com/images/2022/06/10/multimedia/10liv-golf-explainer/10liv-golf-explainer-thumbLarge.jpg')
  })

  it('should be able to filter the top stories by category', () => {
    cy.get('select').select('books')
    cy.get('.articleLink').should('have.length', 1)
    cy.contains("Globetrotting")
    cy.get('img').should('have.length', 1)
    cy.get('img').eq(0).should('have.attr', 'src').should('include', 'https://static01.nyt.com/images/2022/06/11/books/globetrotting-promo/globetrotting-promo-thumbLarge.png')
  })

  it('should have links to the detailed view', () => {
    cy.get('.articleLink').first().click()
    cy.url().should('eq', 'http://localhost:3000/home/a34bed81-9e37-51c7-9f33-c2ae4fc60ff4')
  })
})