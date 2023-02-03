import data from "../fixtures/example.json";

describe("Homepage", () => {
  it("adds the document to the dashboard", () => {
    cy.visit("localhost:5173");
    cy.get("#username").type(data.email);
    cy.wait(1000);
    cy.get("#password").type(data.password);
    cy.wait(1000);
    cy.get("#login").click();
  });
});
