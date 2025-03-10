describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://repertoire-seven.vercel.app");
    // cy.get(".gap-2 > .bg-purple-700");
    cy.visit("https://repertoire-seven.vercel.app/login");
    cy.get(":nth-child(1) > .max-w-full").type("caio@email.com");
    cy.get(":nth-child(2) > .max-w-full").type("123456");
    cy.get(".px-8").click();
    cy.get(":nth-child(1) > .mt-4").click();
    cy.get(":nth-child(1) > .max-w-full").type("Repertorio Cypress");
    cy.get(":nth-child(2) > .max-w-full").type("Banda Javascriptos");
    cy.get(".mt-6 > .px-8").click();
  });
});
