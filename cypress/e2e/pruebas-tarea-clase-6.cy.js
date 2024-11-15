/// <reference types="cypress" />

beforeEach(()=>{
  cy.visit('http://127.0.0.1:5500/index.html')
});

describe('Primer test de la clase 6', ()=>{
  
  it('testea la funcionalidad de las edades', ()=>{
    
    cy.get('#integrantes-familia').type('2');
    cy.get('#crear-labels').click();
    cy.get('.valores-edades').eq(0).type('20');
    cy.get('.valores-edades').eq(1).type('10');
    cy.get('#calcular-edades').click();
    cy.get('#resultados-edades').contains(`La edad más chica es 20. La edad más grande es 10. El promedio de edad del grupo familiar es 15`);
    cy.wait(1000);
    cy.get('#boton-limpiar').click();
    cy.get(".valores-edades").should('have.length', 0);
  });
});

describe('Segundo test de la clase 6', ()=>{

  it('testea la funcionalidad de los salarios', ()=>{
    cy.get('#agregar-campos').click().click();
    cy.get('.valores-salarios').eq(0).type('1000');
    cy.get('.valores-salarios').eq(1).type('2000');
    cy.get('#calcular-salario').click();
    cy.get('#resultados-salario').contains('El salario anual promedio es 1500. El salario más grande es 1000. El salario más chico es 2000. El salario promedio mensual es 125');
    cy.wait(1000);
    cy.get('#quitar-campos').click().click();
    cy.get('.valores-salarios').should('have.length', 0);
  });
});
