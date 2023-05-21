import { movieData } from "../../src/sampledata";

describe('Movie detail page', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 200,
      body: movieData
    })
      .visit("http://localhost:3000/")
      .intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919", {
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
  });

  it("should display Rancid Tomatillos in the header", () => {
    cy.get("main header img").should('have.attr', "alt", "Rancid Tomatillos");
  });

  it("should display an error if the movie fails to load", () => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919", {
      statusCode: 500,
      body: "Error loading movie"
    })
    cy.get("main").get(".movie-list").find(".movie-card").first().click()
      .get("h2").contains("Something went wrong! Try again later!");
  });

  it("should display an error if the movie does not exist", () => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919", {
      statusCode: 404,
      body: "Movie does not exist"
    })
    cy.get("main").get(".movie-list").find(".movie-card").first().click()
      .get("h2")
      .contains("Movie not found. Please select a different movie!");
  });

  it("should open a detail page when a movie card is clicked", () => {
    cy.get("main").get(".movie-list").find(".movie-card").first().click()
      .url().should('eq', "http://localhost:3000/694919")
      .get(".movie-detail-container").find('img').should('have.attr', "src", "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg")
      .get(".movie-detail").find("h1").contains("Money Plane")
      .get('p').first().contains("Rating: 7 / 10 ⭐️")
      .next().contains("Release Date: Sep 29, 2020")
      .next().contains("Genre: Drama")
      .next().contains("Duration: 2 Hours 19 Minutes")
      .next().contains("Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!")
  })

  it("should go to landing page when return is clicked", () => {
    cy.get("main").get(".movie-list").find(".movie-card").first().click()
      .get(".movie-detail-container").find('.return-button').click()
      .url().should('eq', "http://localhost:3000/")
  })
})