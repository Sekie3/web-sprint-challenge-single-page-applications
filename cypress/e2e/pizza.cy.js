describe("Pizza Order Form", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/pizza");
    });
  
    it("should allow adding text to the input box", () => {
      const testName = "John Doe";
  
      cy.get('input[name="name"]').type(testName).should("have.value", testName);
    });
  
    it("should allow selecting multiple toppings", () => {
      const toppingsToSelect = ["pepperoni", "mushrooms"];
  
      toppingsToSelect.forEach((topping) => {
        cy.get(`input[type="checkbox"][value="${topping}"]`).check();
      });
  
      toppingsToSelect.forEach((topping) => {
        cy.get(`input[type="checkbox"][value="${topping}"]`).should("be.checked");
      });
    });
  
    it("should allow submitting the form", () => {
      cy.get('input[type="submit"]').click();
  
    });
  });