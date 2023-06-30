# Threads

Threads is a mobile friendly website built using Next.js, SCSS and Searchspring's API. It takes advantage of Next.js to pregenerate the first page of results for linked pages and uses dynamic routes to save the search and page number you were on.

## [Demo](https://threads-kappa.vercel.app/)

## Thought Process

I decided to use Next.js with this project as I felt it would be best suited if I were to build a full integration for this app. The features I felt were most useful were the ability to pregenerate popular searches to reduce load times and being able to save the page number you were on by using dynamic routes to keep data on refresh. In addition I felt this was a great opportunity to experiment with the new App router in Next.js.

## Features

- Pregenerated Routes for fast load times
- A sticky header using IntersectionObserver to change styles
- Mobile Responsiveness
- The ability to detect when no results are found
- Dynamic routes to save the page you were on when refreshing
- Conditionally disable next and previous buttons depending on page number
