describe("Products Page Tests", () => {
	beforeEach(() => {
		cy.visit("/about");
		cy.intercept("GET", "https://fakestoreapi.com/products", (req) => {
			req.reply((res) => {
				res.delay = 1000; // 1 sec delay
				res.send([
					{
						id: 1,
						title: "Product 1",
						price: 29.99,
						image: "https://via.placeholder.com/150",
					},
					{
						id: 2,
						title: "Product 2",
						price: 39.99,
						image: "https://via.placeholder.com/150",
					},
					{
						id: 3,
						title: "Product 3",
						price: 49.99,
						image: "https://via.placeholder.com/150",
					},
				]);
			});
		}).as("getProducts");
	});

	it("visits the products page", () => {
		cy.contains("h1", "Products Page");
	});

	it("loads products", () => {
		cy.wait("@getProducts");
		cy.get(".product-item").should("have.length", 3);
		cy.get(".product-item")
			.first()
			.within(() => {
				cy.get("h5").should("contain", "Product 1");
				cy.get("img").should(
					"have.attr",
					"src",
					"https://via.placeholder.com/150"
				);
				cy.get("button").should("contain", "Add to Cart");
			});
	});

	it("shows loading state", () => {
		cy.get('[data-cy="loading"]').should("contain", "Loading productsss...");
		cy.wait("@getProducts");
		cy.get('[data-cy="loading"]').should("not.exist");
	});

	it("adds a product to the cart", () => {
		cy.get(".product-item")
			.first()
			.within(() => {
				cy.get("button").click();
			});
		cy.get('[data-test-cart="count"]').should("contain", "1");
	});
});
