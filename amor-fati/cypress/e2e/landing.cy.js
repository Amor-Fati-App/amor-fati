/* eslint-disable no-undef */
describe('Amor Fati Landing Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('Hero Section (AM-487, AM-478)', () => {
    it('should display the main headline "Amor Fati"', () => {
      cy.getByData('hero-headline').should('be.visible').and('contain.text', "AMOR")
    })

    it('should display the tagline', () => {
      cy.getByData('tagline').should('contain.text', 'destiny')
    })
  })

  describe('CTA Button - Cross-Device (AM-473, AM-481, AM-484)', () => {
    const viewports = [
      { name: "Desktop", width: 1920, height: 1080 },
      { name: "Tablet", width: 768, height: 1024 },
      { name: "Mobile", width: 375, height: 667 },
    ];

    viewports.forEach(({ name, width, height }) => {
      it(`should display and be clickable on ${name}`, () => {
        cy.viewport(width, height)

        cy.wait(500)
        
        cy.getByData('cta-button').should('not.be.disabled')
        
        cy.getByData('cta-button').click()
        
        cy.url().should('include', '/signup')
      })
    })
  })

  describe('Content Sections', () => {
    it('should display "Consult the Oracle"', () => {
      cy.scrollTo('0%', '25%');

      cy.contains('Consult the Oracle').should('be.visible')

      cy.contains('Daily Draw').should('be.visible')
    })

    it('should display the "Digital Altar" section', () => {
      cy.scrollTo('0%', '30%');

      cy.contains('The Digital Altar').should('be.visible')
    })
  })


})