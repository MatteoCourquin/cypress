import data from "../fixtures/example.json";

describe("Form", () => {
  it("complete form", () => {
    cy.visit("localhost:5173");
    cy.wait(300);
    cy.get("#username").type(data.email);
    cy.wait(300);
    cy.get("#password").type(data.password);
    cy.wait(300);
    cy.get("#login").click();
  });
});
