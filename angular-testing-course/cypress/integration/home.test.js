describe("Home Page", () => {
  it("should display a list of courses", () => {
    cy.fixture("courses.json").as("courseJSON");
    cy.server();
    cy.route("/api/courses", "@courseJSON").as("courses");
    cy.visit("/");
    cy.contains("All Courses");
    cy.wait("@courses");
    cy.get("mat-card").should("have.length", 9);
  });
});
