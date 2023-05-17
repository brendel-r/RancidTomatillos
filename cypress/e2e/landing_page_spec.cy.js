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
      .get(".movie-list").find(".movie-card").should("have.length", 8)
      .get('img').first().should('have.attr', "src", "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg")
      .get("h2").first().contains('Money Plane')
      .get("p").first().contains('7')
      .get('img').last().should('have.attr', "src", "https://image.tmdb.org/t/p/original//kiX7UYfOpYrMFSAGbI6j1pFkLzQ.jpg")
      .get('h2').last().contains('After We Collided')
      .get('p').last().contains('5')
  });

  it("Should open a movie's detail page when a movie card is clicked and go back to main page when Return to Movie List is clicked", () => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919", {
      statusCode: 200,
      body: {
        movie: {
          id: 694919,
          title: "Money Plane",
          poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
          backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
          release_date: "2020-09-29",
          overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!",
          average_rating: 6.666666666666667,
          genres: ["Drama"],
          budget: 63000000,
          revenue: 100853753,
          runtime: 139,
          tagline: "It's a movie!"
        }
      }   
    })
    .get("main")
    .get(".movie-list")
    .find(".movie-card").first().click()
    .url().should('eq',"http://localhost:3000/694919")
    .get(".detail-top").find('img').should('have.attr', "src", "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg")
    .get(".detail-bottom").find("h1").contains("Money Plane")
    .get(".detail-bottom").find('p').first().contains("Rating: 7/ 10 ⭐️'s!")
    .next().contains("Release Date: Sep 29, 2020")
    .next().contains("Genre: Drama")
    .next().contains("Duration: 2 Hours 19 Minutes")
    .next().contains("Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!")
    .get(".detail-top").find(".return-button").click()
    .url().should('eq',"http://localhost:3000/")
  })
});