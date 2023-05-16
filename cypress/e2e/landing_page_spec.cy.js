import { movieData } from "../../src/sampledata";

describe("My Cypress Test", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 200,
      body: movieData
    })
      .visit("http://localhost:3000/")
  });

  it("should display 'Welcome to Rancid Tomatillos' in the header", () => {
    cy.get("main header h1").should("contain", "Welcome to Rancid Tomatillos");
  });

  it("should display a list of movie cards with details", () => {
    cy.get("main")
      .get(".movie-list")
      .find(".movie-card")
      .should("have.length",8)
      .get('img').first().should ('have.attr',"src", "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg")
      .get("h2").first().contains('Money Plane')
      .get("p").first().contains('7')
      .get('img').last().should ('have.attr',"src", "https://image.tmdb.org/t/p/original//kiX7UYfOpYrMFSAGbI6j1pFkLzQ.jpg")
      .get('h2').last().contains('After We Collided')
      .get('p').last().contains('5')
    });
});