describe('Details', () => {

  beforeEach(() => {
    cy.intercept('GET', 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=bJT1NeTocYTr6osWB9O4AXvY318qfnGt', {fixture: './home.json'})
    .visit('http://localhost:3000/home/a34bed81-9e37-51c7-9f33-c2ae4fc60ff4')
  })

  it('should display the information for the article', () => {
    cy.contains('Manchin, in a Reversal, Agrees to Climate and Tax Package')
    cy.contains('By Emily Cochrane | Date Published: 07-27-2022')
    cy.get('img').should('have.attr', 'src').should('include', 'https://static01.nyt.com/images/2022/07/27/us/politics/27dc-cong-01/merlin_210394923_57b6b84f-9a24-4cae-90ce-681e14143e50-superJumbo.jpg')
    cy.contains('Copyright: Pete Marovich for The New York Times')
    cy.contains('“This bill will cut the inflation taxes Americans are paying, lower the cost of health insurance and prescription drugs, and ensure our country invests in the energy security and climate change solutions we need to remain a global superpower,” Senator Joe Manchin III said in a statement on Wednesday.')
    cy.contains('The West Virginia Democrat, a holdout on his party’s domestic agenda, said the package would reduce inflation, a concern he had cited in rejecting it just weeks ago.')
    cy.contains('To view this story on the NYT website, click here')
  })

  it('should have a link to visit the NYT website', () => {
    cy.get('a').should('have.attr', 'href').should('include', 'https://www.nytimes.com/2022/07/27/us/politics/manchin-climate-tax-bill.html')
  })

  it('should have a button to return back to the homepage', () => {
    cy.get('button').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
})