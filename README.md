# GitHub Repository Search

A small app built with React, TypeScript, Vite, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

## Build and lint

```bash
npm run build
npm run lint
```

## Features

Search public repositories, view their details, and open them on GitHub in a new tab. Includes pagination, page-size selection, and loading, error, and empty states.

## Decisions

- Tailwind CSS handles styling, with the search form and pagination adapted from Flowbite examples.
- Native `fetch` and React state keep data fetching simple for this small app. TanStack Query could be useful if caching or more complex request handling were needed.
- The API request lives in `api/github.ts`, while `App` manages search and pagination state.
- The input value and submitted query are separate, so the results label stays accurate while editing the input.
- Previous and Next buttons keep pagination simple. A new search or page-size change resets to page 1.

## Notes and limitations

- GitHub only exposes the first 1,000 matches, so pagination is capped even when `total_count` is larger. [GitHub docs](https://docs.github.com/en/rest/search/search#about-search)
- When `incomplete_results` is `true`, the results may be partial. The current UI displays the returned results without a separate warning. [GitHub docs](https://docs.github.com/en/rest/search/search#timeouts-and-incomplete-results)
- Public API requests are rate-limited. Rate-limit errors use the same error message area as other request failures.
- Outdated responses are ignored so they cannot overwrite newer results. The network requests themselves are not cancelled.
- A submission counter allows the same query to be submitted again, including retries after an error.
- There is no application-level cache, and search state resets on a page refresh.
- TypeScript types describe the expected API response but do not validate the JSON at runtime.
