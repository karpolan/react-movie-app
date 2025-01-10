# TMDB Movie App

Web Assignment - TMDB Movie App

## Assignment Description

For this assignment, you will build a web app using the TMDB (The Movie Database) API to fetch movie data and create a simple, interactive experience. The app will have two primary screens: the **Home Page** and the **Movie Details Page**.

### Home Page

#### Popular Movies

- Fetch and display the **Most Popular Movies** from TMDB’s API.
- Each list item should display the following information:
  - **Movie Title** (Main text, larger font)
  - **Release Date** (Subtext under the movie title)
  - **Poster Thumbnail** (Displayed on the left)
  - **Rating** (Shown as a small visual indicator, like stars or a numerical value)

#### Search

- Add a **Search Bar** at the top of the home page to allow users to search for movies.
- Display the search results below the search bar using a similar layout as the Popular Movies list.
- When a user searches, show relevant movie results from TMDB’s catalog. Each result should be tappable and lead to the **Movie Details Page**.

### Movie Details Page

When a user selects a movie from the Home Page or the search results, navigate to the **Movie Details Page**, showing detailed information about the selected movie:

- **Movie Title** (Large, main heading at the top)
- **Release Date** (Displayed below the movie title)
- **Full-size Poster Image** (A larger image displayed prominently on the page)
- **Overview** (A brief summary of the movie’s plot)
- **Genres** (Displayed under or beside the poster)
- **Rating** (Displayed as a visual indicator, like stars or a numerical rating)
- **Runtime** (Displayed in hours and minutes)
- **Language** (The primary language of the movie, e.g., English, French, etc.)

### Additional Notes

#### API Usage

- Refer to the [TMDB API Documentation](https://developer.themoviedb.org/) for the appropriate endpoints and parameters to use.
- Your task includes identifying the correct endpoints for:
  - Retrieving a list of **popular movies**.
  - Searching for movies based on a keyword.
  - Fetching detailed information about a selected movie.
- Use the provided API key `xxx` in your requests to authenticate your access to the TMDB API.

#### Architecture and Code Quality

- Ensure **scalability**: the code should be easy to extend and maintain as the app grows.
- Include **error handling** for network requests, showing appropriate responses if data cannot be fetched.
- Write **unit tests** for key components, such as data models and network handling, to demonstrate test-driven development skills.
- Properly manage **state and lifecycle events** to ensure the app behaves correctly when navigating between screens.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run lint`

Checks the code for errors and missing things

### `npm run format`

Formats the code according to `./prettier.config.mjs` config

### `npm test`

Launches the test runner in the interactive watch mode.<br />

### `npm run build`

Builds the app for production or local development to the `dist` folder.<br />
