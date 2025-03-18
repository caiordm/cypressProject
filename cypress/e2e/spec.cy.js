describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://repertoire-seven.vercel.app");
    cy.visit("https://repertoire-seven.vercel.app/signup");
    cy.get(":nth-child(1) > .max-w-full").type("Jonh Doe");
    cy.get(":nth-child(2) > .max-w-full").type("jonh@email.com");
    cy.get(":nth-child(3) > .max-w-full").type("123456");
    cy.get(".px-8").click();
    cy.get('.gap-2').click();
    cy.get('.gap-2 > .bg-purple-700').click();
    cy.get(":nth-child(1) > .max-w-full").type("jonh@email.com");
    cy.get(":nth-child(2) > .max-w-full").type("123456");
    cy.get(".px-8").click();
    cy.get('.mt-4').click();
    cy.get(":nth-child(1) > .max-w-full").type("Repertorio Cypress");
    cy.get(":nth-child(2) > .max-w-full").type("Banda Javascriptos");
    cy.get(".mt-6 > .px-8").click();
    cy.get('.flex-wrap > :nth-child(1)').click();
    cy.get('.mt-1').click();
    cy.get(':nth-child(1) > .max-w-full').type('One Musique');
    cy.get(':nth-child(2) > .max-w-full').select('C');
    cy.get(':nth-child(3) > .max-w-full').type('https://youtu.be/lx0eir2xF5E');
    cy.get('.mt-6 > .px-8').click();
  });
});
