# Threads

Threads is a mobile friendly website built using Next.js, SCSS and Searchspring's API. It takes advantage of Next.js to pregenerate the first page of results for linked pages and uses dynamic routes to save the search and page number you were on.

## [Demo](https://threads-kappa.vercel.app/)

## Thought Process

I decided to use Next.js with this project as I felt it would be best suited for a full integration of this app. I wanted the ability to pregenerate popular searches and save the page the user was on by using dynamic routes. In addition, this was a great opportunity to experiment with the new App router in Next.js and try out new features.

## Features

- Pregenerated routes for fast load times
- A sticky header using IntersectionObserver to change styles
- Mobile responsiveness
- The ability to detect when no results are found
- Dynamic routes to save the page you were on when refreshing
- Conditionally disable next and previous buttons depending on page number
